import { useState } from 'react';
import axios from 'axios';
import config from '../config';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: '',
    email: '',
    mobileno: '',
    location: ''
  });

  const [status, setStatus] = useState({ type: '', text: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', text: 'Sending message...' });

    try {
      const response = await axios.post(`${config.url}/sendemail`, formData);
      setStatus({ type: 'success', text: response.data || 'Message sent successfully!' });

      // Clear the form after success
      setFormData({
        name: '',
        subject: '',
        message: '',
        email: '',
        mobileno: '',
        location: ''
      });
    } catch (err) {
      console.error(err);
      setStatus({ type: 'error', text: 'Failed to send message. Please try again later.' });
    }
  };

  return (
    <div
      style={{
        maxWidth: '600px',
        margin: '40px auto',
        padding: '30px',
        backgroundColor: '#f8fbff',
        borderRadius: '12px',
        boxShadow: '0 6px 18px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h2 style={{ textAlign: 'center', color: '#1a3c6e', marginBottom: '20px' }}>
        Contact Us
      </h2>

      {status.text && (
        <p
          style={{
            textAlign: 'center',
            color:
              status.type === 'success'
                ? 'green'
                : status.type === 'error'
                ? 'red'
                : '#555',
            fontWeight: 'bold',
            marginBottom: '20px',
          }}
        >
          {status.text}
        </p>
      )}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {[
          { label: 'Name', id: 'name', type: 'text' },
          { label: 'Subject', id: 'subject', type: 'text' },
          { label: 'Message', id: 'message', type: 'text' },
          { label: 'Email', id: 'email', type: 'email' },
          { label: 'Mobile No', id: 'mobileno', type: 'number' },
          { label: 'Location', id: 'location', type: 'text' },
        ].map(({ label, id, type }) => (
          <div key={id} style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
            <label htmlFor={id} style={{ marginBottom: '5px', color: '#2f4f4f', fontWeight: '500' }}>
              {label}
            </label>
            <input
              type={type}
              id={id}
              value={formData[id]}
              onChange={handleChange}
              required
              style={{
                padding: '10px',
                borderRadius: '6px',
                border: '1px solid #ccc',
                fontSize: '16px',
                transition: '0.2s',
              }}
              onFocus={(e) => (e.target.style.borderColor = '#1a3c6e')}
              onBlur={(e) => (e.target.style.borderColor = '#ccc')}
            />
          </div>
        ))}

        <button
          type="submit"
          disabled={status.type === 'loading'}
          style={{
            backgroundColor: '#1a3c6e',
            color: '#fff',
            padding: '12px 0',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: '0.3s',
          }}
        >
          {status.type === 'loading' ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}