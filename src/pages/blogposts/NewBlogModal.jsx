import { useContext, useMemo, useState } from 'react';
import { nanoid } from 'nanoid';
import { Button, IconButton, Modal } from 'rsuite';
import PlusIcon from '@rsuite/icons/PlusRound';
import styles from './NewBlogModal.module.css';
import { createPortfolioBlog } from '../../services/portfolioBlogs.js';
import { sharedState } from '../../App.jsx';

function createEmptyBlock(type = 'paragraph') {
  return {
    id: nanoid(),
    type,
    text: '',
    itemsText: '',
    imageFile: null,
    imageAlt: '',
    caption: '',
  };
}

const EMPTY_FORM = {
  heading: '',
  created: '',
  intro: '',
  contentBlocks: [createEmptyBlock('sectionHeading'), createEmptyBlock('paragraph')],
};

export default function NewBlogModal({ onCreated }) {
  const { state } = useContext(sharedState);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [statusMessage, setStatusMessage] = useState('');
  const [statusType, setStatusType] = useState('info');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [draggedBlockId, setDraggedBlockId] = useState(null);

  const hasRenderableBlocks = useMemo(
    () =>
      formData.contentBlocks.some((block) => {
        if (block.type === 'image') {
          return Boolean(block.imageFile);
        }
        if (block.type === 'bullets') {
          return Boolean(block.itemsText.trim());
        }
        return Boolean(block.text.trim());
      }),
    [formData.contentBlocks],
  );

  if (!state.isLoggedIn) {
    return null;
  }

  function updateBlock(blockId, field, value) {
    setFormData((current) => ({
      ...current,
      contentBlocks: current.contentBlocks.map((block) => (block.id === blockId ? { ...block, [field]: value } : block)),
    }));
  }

  function addBlock(type) {
    setFormData((current) => ({
      ...current,
      contentBlocks: [...current.contentBlocks, createEmptyBlock(type)],
    }));
  }

  function removeBlock(blockId) {
    setFormData((current) => ({
      ...current,
      contentBlocks: current.contentBlocks.length === 1 ? [createEmptyBlock('paragraph')] : current.contentBlocks.filter((block) => block.id !== blockId),
    }));
  }

  function moveBlock(sourceId, targetId) {
    if (!sourceId || sourceId === targetId) {
      return;
    }

    setFormData((current) => {
      const blocks = [...current.contentBlocks];
      const sourceIndex = blocks.findIndex((block) => block.id === sourceId);
      const targetIndex = blocks.findIndex((block) => block.id === targetId);
      if (sourceIndex < 0 || targetIndex < 0) {
        return current;
      }
      const [moved] = blocks.splice(sourceIndex, 1);
      blocks.splice(targetIndex, 0, moved);
      return { ...current, contentBlocks: blocks };
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatusMessage('Creating blog, uploading any selected images, and saving the ordered content blocks...');
    setStatusType('info');
    setIsSubmitting(true);

    try {
      const createdBlog = await createPortfolioBlog(formData);
      setStatusMessage('Blog created successfully.');
      setStatusType('success');
      onCreated?.(createdBlog);
      setFormData(EMPTY_FORM);
      setTimeout(() => setOpen(false), 500);
    } catch (error) {
      setStatusMessage(error?.message ?? 'Blog creation failed.');
      setStatusType('error');
      console.error('Blog creation failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <IconButton appearance="ghost" onClick={() => setOpen(true)} icon={<PlusIcon />} className={styles.addBlogButton}>
        Add Blog
      </IconButton>

      <Modal size="md" backdrop open={open} onClose={() => setOpen(false)} className={styles.modalShell}>
        <Modal.Header>
          <Modal.Title>Add Blog Post</Modal.Title>
          <p className={styles.modalLead}>Create a Firebase blog record with ordered content blocks. You can mix headings, paragraphs, bullet lists, and images, then drag the cards to control the final blog layout.</p>
        </Modal.Header>
        <Modal.Body>
          <form className={styles.formGrid} onSubmit={handleSubmit}>
            <label className={styles.fieldBlock}>
              <span>Heading</span>
              <input value={formData.heading} onChange={(event) => setFormData((current) => ({ ...current, heading: event.target.value }))} required />
            </label>

            <label className={styles.fieldBlock}>
              <span>Created label</span>
              <input value={formData.created} onChange={(event) => setFormData((current) => ({ ...current, created: event.target.value }))} placeholder="Optional. Leave blank to use today’s date." />
            </label>

            <label className={`${styles.fieldBlock} ${styles.fullWidth}`}>
              <span>Intro paragraph</span>
              <textarea rows="4" value={formData.intro} onChange={(event) => setFormData((current) => ({ ...current, intro: event.target.value }))} required />
            </label>

            <div className={`${styles.blockToolbar} ${styles.fullWidth}`}>
              <Button appearance="ghost" type="button" onClick={() => addBlock('sectionHeading')}>Add heading</Button>
              <Button appearance="ghost" type="button" onClick={() => addBlock('paragraph')}>Add paragraph</Button>
              <Button appearance="ghost" type="button" onClick={() => addBlock('bullets')}>Add bullet list</Button>
              <Button appearance="ghost" type="button" onClick={() => addBlock('image')}>Add image</Button>
            </div>

            <div className={`${styles.sectionsWrap} ${styles.fullWidth}`}>
              {formData.contentBlocks.map((block, index) => (
                <div
                  className={styles.sectionCard}
                  key={block.id}
                  draggable
                  onDragStart={() => setDraggedBlockId(block.id)}
                  onDragOver={(event) => event.preventDefault()}
                  onDrop={() => {
                    moveBlock(draggedBlockId, block.id);
                    setDraggedBlockId(null);
                  }}
                  onDragEnd={() => setDraggedBlockId(null)}
                >
                  <div className={styles.sectionCardHeader}>
                    <h4>{index + 1}. {block.type === 'sectionHeading' ? 'Heading block' : block.type === 'paragraph' ? 'Paragraph block' : block.type === 'bullets' ? 'Bullet list block' : 'Image block'}</h4>
                    <div className={styles.cardHeaderActions}>
                      <span className={styles.dragHint}>Drag to reorder</span>
                      <button type="button" onClick={() => removeBlock(block.id)}>
                        Remove
                      </button>
                    </div>
                  </div>

                  {block.type === 'sectionHeading' ? (
                    <label className={styles.fieldBlock}>
                      <span>Heading text</span>
                      <input value={block.text} onChange={(event) => updateBlock(block.id, 'text', event.target.value)} placeholder="Section heading" />
                    </label>
                  ) : null}

                  {block.type === 'paragraph' ? (
                    <label className={styles.fieldBlock}>
                      <span>Paragraph text</span>
                      <textarea rows="5" value={block.text} onChange={(event) => updateBlock(block.id, 'text', event.target.value)} placeholder="Write the paragraph exactly as it should appear in the blog." />
                    </label>
                  ) : null}

                  {block.type === 'bullets' ? (
                    <label className={styles.fieldBlock}>
                      <span>Bullet points (one bullet per line)</span>
                      <textarea rows="5" value={block.itemsText} onChange={(event) => updateBlock(block.id, 'itemsText', event.target.value)} placeholder="First bullet&#10;Second bullet" />
                    </label>
                  ) : null}

                  {block.type === 'image' ? (
                    <>
                      <label className={styles.fieldBlock}>
                        <span>Image file</span>
                        <input type="file" accept="image/*" onChange={(event) => updateBlock(block.id, 'imageFile', event.target.files?.[0] ?? null)} />
                      </label>
                      <label className={styles.fieldBlock}>
                        <span>Image alt text</span>
                        <input value={block.imageAlt} onChange={(event) => updateBlock(block.id, 'imageAlt', event.target.value)} placeholder="Describe the image for accessibility" />
                      </label>
                      <label className={styles.fieldBlock}>
                        <span>Image caption</span>
                        <input value={block.caption} onChange={(event) => updateBlock(block.id, 'caption', event.target.value)} placeholder="Optional caption" />
                      </label>
                    </>
                  ) : null}
                </div>
              ))}
            </div>

            <div className={`${styles.actionsRow} ${styles.fullWidth}`}>
              <span className={styles.helperText}>Drag the content cards to control the final render order on the blog page.</span>
              <div className={styles.primaryActions}>
                <Button appearance="subtle" onClick={() => setOpen(false)} disabled={isSubmitting}>
                  Cancel
                </Button>
                <Button appearance="primary" type="submit" disabled={isSubmitting || !formData.heading.trim() || !formData.intro.trim() || !hasRenderableBlocks}>
                  {isSubmitting ? 'Saving...' : 'Create blog'}
                </Button>
              </div>
            </div>

            {statusMessage ? <div className={`${styles.statusBanner} ${styles[statusType] ?? ''}`}>{statusMessage}</div> : null}
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
