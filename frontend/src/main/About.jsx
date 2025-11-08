export default function About() {
  return (
    <div
      style={{
        textAlign: 'center',
        marginTop: '40px',
        padding: '40px 20px',
        background: 'linear-gradient(135deg, #e6f2ff, #f9f9ff)',
        borderRadius: '16px',
        boxShadow: '0 6px 16px rgba(0, 0, 0, 0.15)',
        maxWidth: '800px',
        marginInline: 'auto',
      }}
    >
      <h2 style={{ color: '#1a3c6e', fontSize: '28px', marginBottom: '15px' }}>
        Welcome to the Event Management Platform 🎉
      </h2>

      <p style={{ color: '#2f4f4f', fontSize: '18px', lineHeight: '1.8' }}>
        As part of our <strong>Skill Development Project</strong> this semester, 
        we’ve developed a full-featured platform to help organize and manage events efficiently.
        <br />
        The platform includes three key modules — <strong>Customer</strong>,{' '}
        <strong>Admin</strong>, and <strong>Manager</strong>.
        <br />
        Explore each section and share your valuable feedback with us!
      </p>
    </div>
  );
}
