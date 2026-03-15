import { useContext, useEffect, useMemo, useState } from 'react';
import { Button, IconButton, Modal, Radio, RadioGroup } from 'rsuite';
import PlusIcon from '@rsuite/icons/PlusRound';
import SettingHorizontalIcon from '@rsuite/icons/SettingHorizontal';
import styles from './NewWorkModal.module.css';
import { sharedState } from '../../../App.jsx';
import { addPortfolioProject, deletePortfolioProject, updatePortfolioProject } from '../../../services/portfolioProjects.js';

const EMPTY_LINK = {
  title: '',
  iconType: 'external',
  link: '',
  status: 'live',
};

const EMPTY_FORM = {
  title: '',
  order: '',
  skills: [],
  features: ['', '', '', '', ''],
  links: [{ ...EMPTY_LINK }],
  existingPreviewImages: [],
  newImageFiles: [],
};

function createInitialForm(project) {
  if (!project) {
    return {
      ...EMPTY_FORM,
      links: [{ ...EMPTY_LINK }],
      features: [...EMPTY_FORM.features],
      skills: [],
      existingPreviewImages: [],
      newImageFiles: [],
    };
  }

  const features = [...(project.features ?? [])];
  while (features.length < 5) {
    features.push('');
  }

  const links = (project.links?.length ? project.links : [{ ...EMPTY_LINK }]).map((link) => ({
    title: link.title ?? '',
    iconType: link.iconType ?? link.type ?? 'external',
    link: link.link ?? '',
    status: link.status === 'offline' ? 'offline' : 'live',
  }));

  return {
    title: project.title ?? '',
    order: String(project.order ?? project.id ?? ''),
    skills: project.skills ?? [],
    features,
    links,
    existingPreviewImages: [...(project.previewImages ?? [])],
    newImageFiles: [],
  };
}

export default function NewWorkModal({ mode = 'add', project = null, skillOptions = [], onSaved, onDeleted }) {
  const { state } = useContext(sharedState);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState(() => createInitialForm(project));
  const [statusMessage, setStatusMessage] = useState('');
  const [statusType, setStatusType] = useState('info');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!open) {
      return;
    }

    setFormData(createInitialForm(project));
    setStatusMessage('');
    setStatusType('info');
  }, [open, project]);

  const pickerOptions = useMemo(
    () => skillOptions.map((item) => ({ label: item.title, value: item.title })),
    [skillOptions],
  );

  if (!state.isLoggedIn) {
    return null;
  }

  function updateFeature(index, value) {
    setFormData((current) => {
      const nextFeatures = [...current.features];
      nextFeatures[index] = value;
      return { ...current, features: nextFeatures };
    });
  }

  function toggleSkill(skillTitle) {
    setFormData((current) => {
      const hasSkill = current.skills.includes(skillTitle);
      return {
        ...current,
        skills: hasSkill ? current.skills.filter((item) => item !== skillTitle) : [...current.skills, skillTitle],
      };
    });
  }

  function removeExistingImage(index) {
    setFormData((current) => ({
      ...current,
      existingPreviewImages: current.existingPreviewImages.filter((_, currentIndex) => currentIndex !== index),
    }));
  }

  function updateLink(index, field, value) {
    setFormData((current) => ({
      ...current,
      links: current.links.map((link, currentIndex) => (currentIndex === index ? { ...link, [field]: value } : link)),
    }));
  }

  function addLinkRow() {
    setFormData((current) => ({
      ...current,
      links: [...current.links, { ...EMPTY_LINK }],
    }));
  }

  function removeLinkRow(index) {
    setFormData((current) => ({
      ...current,
      links: current.links.length === 1 ? [{ ...EMPTY_LINK }] : current.links.filter((_, currentIndex) => currentIndex !== index),
    }));
  }

  async function handleSubmit(event) {
    event?.preventDefault?.();
    setIsSubmitting(true);
    setStatusMessage(mode === 'add' ? 'Creating project and uploading new images...' : 'Updating project and uploading new images...');
    setStatusType('info');

    try {
      const payload = {
        ...formData,
        title: formData.title.trim(),
      };

      const savedProject =
        mode === 'add'
          ? await addPortfolioProject(payload)
          : await updatePortfolioProject(project.docId, payload, project);

      onSaved?.(savedProject, mode);
      setStatusType('success');
      setStatusMessage(mode === 'add' ? 'Project created successfully.' : 'Project updated successfully.');
      setTimeout(() => setOpen(false), 500);
    } catch (error) {
      setStatusType('error');
      setStatusMessage(error?.message ?? 'Project save failed.');
      console.error('Project modal save failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleDelete() {
    if (!project?.docId) {
      return;
    }

    const shouldDelete = window.confirm(`Delete \"${project.title}\" from Firebase?`);
    if (!shouldDelete) {
      return;
    }

    setIsSubmitting(true);
    setStatusMessage('Deleting project from Firebase...');
    setStatusType('info');

    try {
      await deletePortfolioProject(project.docId);
      onDeleted?.(project.docId);
      setOpen(false);
    } catch (error) {
      setStatusType('error');
      setStatusMessage(error?.message ?? 'Project delete failed.');
      console.error('Project delete failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <IconButton
        appearance="ghost"
        color="orange"
        className={mode === 'add' ? styles.addWork : styles.editWork}
        onClick={() => setOpen(true)}
        icon={mode === 'add' ? <PlusIcon /> : <SettingHorizontalIcon />}
      >
        {mode === 'add' ? 'Add Project' : 'Edit'}
      </IconButton>

      <Modal size="md" backdrop open={open} onClose={() => setOpen(false)} className={styles.modalShell}>
        <Modal.Header>
          <Modal.Title>{mode === 'add' ? 'Add Portfolio Project' : `Edit ${project?.title ?? 'Project'}`}</Modal.Title>
          <p className={styles.modalLead}>
            {mode === 'add'
              ? 'Create a new project record in Firebase. Any newly selected images will be uploaded to ImgBB before the project is saved.'
              : 'Update the selected project. Existing ImgBB image URLs can be kept or removed, and any newly selected files will also be uploaded to ImgBB.'}
          </p>
        </Modal.Header>

        <Modal.Body>
          <form className={styles.formGrid} onSubmit={handleSubmit}>
            <label className={styles.fieldBlock}>
              <span>Project title</span>
              <input
                value={formData.title}
                onChange={(event) => setFormData((current) => ({ ...current, title: event.target.value }))}
                placeholder="Portfolio dashboard"
                required
              />
            </label>

            <label className={styles.fieldBlock}>
              <span>Display order</span>
              <input
                value={formData.order}
                onChange={(event) => setFormData((current) => ({ ...current, order: event.target.value }))}
                placeholder="100"
                inputMode="numeric"
              />
            </label>

            <div className={`${styles.fieldBlock} ${styles.fullWidth}`}>
              <span>Skills / tech stack</span>
              <div className={styles.skillsDropdownShell}>
                <details className={styles.skillsDropdown}>
                  <summary>Select skills</summary>
                  <div className={styles.skillOptionList}>
                    {pickerOptions.map((option) => {
                      const checked = formData.skills.includes(option.value);
                      return (
                        <label className={styles.skillOption} key={option.value}>
                          <input type="checkbox" checked={checked} onChange={() => toggleSkill(option.value)} />
                          <span>{option.label}</span>
                        </label>
                      );
                    })}
                  </div>
                </details>
                <div className={styles.selectedSkillsWrap}>
                  {formData.skills.length ? formData.skills.map((skill) => <span key={skill} className={styles.selectedSkillChip}>{skill}</span>) : <span className={styles.helperText}>No skills selected yet.</span>}
                </div>
              </div>
            </div>

            <div className={`${styles.fieldBlock} ${styles.fullWidth}`}>
              <span>Existing preview images</span>
              {formData.existingPreviewImages.length ? (
                <div className={styles.imageList}>
                  {formData.existingPreviewImages.map((imageUrl, index) => (
                    <div className={styles.imageChip} key={`${imageUrl}-${index}`}>
                      <img src={imageUrl} alt={`Preview ${index + 1}`} />
                      <button type="button" onClick={() => removeExistingImage(index)}>
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <p className={styles.helperText}>No existing ImgBB images are attached to this project yet.</p>
              )}
            </div>

            <label className={`${styles.fieldBlock} ${styles.fullWidth}`}>
              <span>Upload new preview images</span>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={(event) =>
                  setFormData((current) => ({
                    ...current,
                    newImageFiles: Array.from(event.target.files ?? []),
                  }))
                }
              />
              <small className={styles.helperText}>Selected files are uploaded to ImgBB only when you save the project.</small>
            </label>

            {[0, 1, 2, 3, 4].map((featureIndex) => (
              <label className={styles.fieldBlock} key={`feature-${featureIndex}`}>
                <span>Feature {featureIndex + 1}</span>
                <input
                  value={formData.features[featureIndex] ?? ''}
                  onChange={(event) => updateFeature(featureIndex, event.target.value)}
                  placeholder={`Feature ${featureIndex + 1}`}
                />
              </label>
            ))}

            <div className={`${styles.fieldBlock} ${styles.fullWidth}`}>
              <span>Project links</span>
              <div className={styles.linkRows}>
                {formData.links.map((linkItem, index) => (
                  <div className={styles.linkRowCard} key={`link-row-${index}`}>
                    <div className={styles.linkRowHeader}>
                      <strong>Link {index + 1}</strong>
                      <button type="button" onClick={() => removeLinkRow(index)}>Remove</button>
                    </div>
                    <label className={styles.fieldBlock}>
                      <span>Link label</span>
                      <input value={linkItem.title} onChange={(event) => updateLink(index, 'title', event.target.value)} placeholder="Repository" />
                    </label>
                    <label className={styles.fieldBlock}>
                      <span>Link icon</span>
                      <select value={linkItem.iconType} onChange={(event) => updateLink(index, 'iconType', event.target.value)}>
                        <option value="repo">GitHub / repo</option>
                        <option value="demo">Live demo</option>
                        <option value="render">Render</option>
                        <option value="heroku">Heroku</option>
                        <option value="external">External link</option>
                      </select>
                    </label>
                    <label className={styles.fieldBlock}>
                      <span>Link URL</span>
                      <input value={linkItem.link} onChange={(event) => updateLink(index, 'link', event.target.value)} placeholder="https://example.com" />
                    </label>
                    <div className={styles.fieldBlock}>
                      <span>Link status</span>
                      <RadioGroup inline value={linkItem.status} onChange={(value) => updateLink(index, 'status', value === 'offline' ? 'offline' : 'live')}>
                        <Radio value="live">Live</Radio>
                        <Radio value="offline">Offline</Radio>
                      </RadioGroup>
                    </div>
                  </div>
                ))}
              </div>
              <Button appearance="ghost" type="button" onClick={addLinkRow} className={styles.addRowButton}>
                Add link
              </Button>
            </div>

            {statusMessage ? (
              <div className={`${styles.statusBanner} ${styles[statusType] ?? ''}`}>{statusMessage}</div>
            ) : null}

            <div className={styles.actionsRow}>
              {mode === 'edit' ? (
                <Button appearance="ghost" color="red" onClick={handleDelete} disabled={isSubmitting}>
                  Delete project
                </Button>
              ) : (
                <span />
              )}
              <div className={styles.primaryActions}>
                <Button appearance="subtle" onClick={() => setOpen(false)} disabled={isSubmitting}>
                  Cancel
                </Button>
                <Button appearance="primary" type="submit" disabled={isSubmitting || !formData.title.trim()}>
                  {isSubmitting ? 'Saving...' : mode === 'add' ? 'Create project' : 'Save changes'}
                </Button>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
