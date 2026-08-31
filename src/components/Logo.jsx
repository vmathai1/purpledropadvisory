import logoPd from '../assets/icons/logo-pd-full.svg';

export default function Logo({ className = 'h-[37.5px] w-[167px]' }) {
  return <img src={logoPd} alt="Purple Drop Advisory" className={className} />;
}
