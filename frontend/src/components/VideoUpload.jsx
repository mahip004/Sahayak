import React, { useState } from 'react';
import axios from 'axios';

function VideoUpload() {
  const [video, setVideo] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setVideo(file);
    setPreview(URL.createObjectURL(file)); // video preview
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!video) {
      alert("Please select a video");
      return;
    }

    const formData = new FormData();
    formData.append('video', video);

    try {
      const res = await axios.post('http://localhost:5001/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      alert('Upload successful: ' + res.data.filename);
    } catch (err) {
      console.error(err);
      alert('Upload failed');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#fef8f8] to-[#fefefe] px-4">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-md text-center">
        <h2 className="text-2xl font-bold text-[#5e6282] mb-6">📹 Upload a Video</h2>

        <form onSubmit={handleUpload} className="flex flex-col space-y-4">
          <input
            type="file"
            accept="video/*"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-[#f1a501] file:text-white
              hover:file:bg-[#e99d00] cursor-pointer"
          />
          <button
            type="submit"
            className="bg-[#f1a501] text-white font-bold py-2 px-4 rounded-full transition hover:bg-[#e99d00]"
          >
            Upload
          </button>
        </form>

        {preview && (
          <div className="mt-6">
            <h3 className="text-[#5e6282] font-medium mb-2">Preview:</h3>
            <video src={preview} controls className="w-full rounded-xl shadow-md" />
          </div>
        )}
      </div>
    </div>
  );
}

export default VideoUpload;
