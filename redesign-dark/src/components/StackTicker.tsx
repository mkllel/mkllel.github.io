import { Atom, Bot, Braces, Cloud, CodeXml, Container, Database, FileCode2, GitBranch, Layers, Network, Palette, Plug, Terminal, Zap } from 'lucide-react';

const stacks = [
  { name: 'Python', icon: CodeXml },
  { name: 'FastAPI', icon: Zap },
  { name: 'Selenium', icon: Bot },
  { name: 'SQLAlchemy', icon: Layers },
  { name: 'PostgreSQL', icon: Database },
  { name: 'HTML5', icon: CodeXml },
  { name: 'CSS3', icon: Palette },
  { name: 'JavaScript', icon: Braces },
  { name: 'TypeScript', icon: FileCode2 },
  { name: 'React', icon: Atom },
  { name: 'Docker', icon: Container },
  { name: 'Linux', icon: Terminal },
  { name: 'AWS', icon: Cloud },
  { name: 'Proxmox', icon: Network },
  { name: 'MCP', icon: Plug },
  { name: 'Git', icon: GitBranch },
];

export default function StackTicker() {
  return (
    <div className="stack-ticker" role="region" aria-label="주요 기술 스택">
      <div className="stack-ticker__viewport">
        <div className="stack-ticker__track">
          {[false, true].map((duplicate) => (
            <ul className="stack-ticker__list" key={String(duplicate)} aria-hidden={duplicate || undefined}>
              {stacks.map(({ name, icon: Icon }) => (
                <li key={name}><Icon size={18} aria-hidden="true" /><span>{name}</span></li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
