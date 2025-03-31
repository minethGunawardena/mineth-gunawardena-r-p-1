function SkillList({ src, skill }) {
  return (
    <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <img src={src} alt={`Icon for ${skill}`} style={{ width: '20px', height: '20px' }} />
      <p style={{ margin: 0, fontSize: '16px' }}>{skill}</p>
    </span>
  );
}

export default SkillList;
