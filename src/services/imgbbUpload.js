const IMGBB_UPLOAD_ENDPOINT = 'https://api.imgbb.com/1/upload';

function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const result = typeof reader.result === 'string' ? reader.result.split(',').pop() : '';
      resolve(result ?? '');
    };
    reader.onerror = () => reject(new Error('Failed to convert image to base64.'));
    reader.readAsDataURL(blob);
  });
}

export async function uploadFileToImgBB(file, suggestedName = 'portfolio-image') {
  const apiKey = import.meta.env.VITE_IMGBB_API_KEY;

  if (!apiKey) {
    throw new Error('Missing ImgBB API key.');
  }

  const base64Image = await blobToBase64(file);
  const formData = new FormData();
  formData.append('image', base64Image);
  formData.append('name', String(suggestedName).replace(/\s+/g, '-').toLowerCase());

  const uploadResponse = await fetch(`${IMGBB_UPLOAD_ENDPOINT}?key=${apiKey}`, {
    method: 'POST',
    body: formData,
  });

  const uploadPayload = await uploadResponse.json();
  if (!uploadResponse.ok || !uploadPayload?.success) {
    throw new Error(uploadPayload?.error?.message || `ImgBB upload failed for ${suggestedName}.`);
  }

  return uploadPayload?.data?.display_url || uploadPayload?.data?.url || '';
}
