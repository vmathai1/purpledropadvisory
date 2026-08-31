import logoPd from '../assets/icons/logo-pd.svg';
import logoAdvisory from '../assets/icons/logo-advisory.svg';

export default function Logo({ className = 'h-[37.5px] w-[167px]' }) {
  return (
    <div className={`relative ${className}`}>
      <img src={logoPd} alt="Purple Drop Advisory" className="absolute inset-0 h-full w-full" />
      <img
        src={logoAdvisory}
        alt=""
        className="absolute"
        style={{ top: '68.01%', left: '21.52%', right: '0.87%', bottom: '4.92%' }}
      />
    </div>
  );
}
