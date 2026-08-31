import { useEffect, useState } from 'react';
import { Check, Palette } from 'lucide-react';
import {
  getCachedSiteAccentTheme,
  getSiteAccentTheme,
  saveSiteAccentTheme,
  type SiteAccentTheme,
} from '../../utils/siteTheme';

interface SiteThemeSettingsProps {
  setError: (message: string) => void;
  setSuccessMessage: (message: string) => void;
}

const accentOptions: Array<{
  value: SiteAccentTheme;
  label: string;
  description: string;
}> = [
  { value: 'green', label: '초록색', description: '현재 포트폴리오의 기본 강조색' },
  { value: 'blue', label: '파란색', description: '차분하고 기술적인 인상의 강조색' },
  { value: 'purple', label: '보라색', description: '개성과 깊이감을 더하는 강조색' },
];

const getAccentLabel = (accent: SiteAccentTheme): string => ({
  green: '초록색',
  blue: '파란색',
  purple: '보라색',
})[accent];

const SiteThemeSettings = ({ setError, setSuccessMessage }: SiteThemeSettingsProps) => {
  const [selectedAccent, setSelectedAccent] = useState<SiteAccentTheme>(getCachedSiteAccentTheme);
  const [savedAccent, setSavedAccent] = useState<SiteAccentTheme>(getCachedSiteAccentTheme);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    let isActive = true;

    getSiteAccentTheme()
      .then((accent) => {
        if (!isActive) return;
        setSelectedAccent(accent);
        setSavedAccent(accent);
      })
      .catch((error) => {
        console.error('사이트 테마 설정 조회 오류:', error);
        if (isActive) setError('사이트 테마 설정을 불러오지 못했습니다.');
      })
      .finally(() => {
        if (isActive) setIsLoading(false);
      });

    return () => {
      isActive = false;
    };
  }, [setError]);

  const handleSave = async () => {
    setIsSaving(true);
    setError('');

    try {
      await saveSiteAccentTheme(selectedAccent);
      setSavedAccent(selectedAccent);
      setSuccessMessage(`${getAccentLabel(selectedAccent)} 테마를 적용했습니다.`);
    } catch (error) {
      console.error('사이트 테마 저장 오류:', error);
      setError('사이트 테마를 저장하는 중 오류가 발생했습니다.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <section className="site-theme-admin" aria-labelledby="site-theme-title">
      <div className="site-theme-admin__header">
        <div>
          <p className="eyebrow">SITE THEME</p>
          <h2 id="site-theme-title">사이트 강조색</h2>
          <p>선택한 색상은 다크 모드와 라이트 모드에 함께 적용됩니다.</p>
        </div>
        <Palette size={24} aria-hidden="true" />
      </div>

      <div className="site-theme-options" role="radiogroup" aria-label="사이트 강조색">
        {accentOptions.map((option) => {
          const isSelected = selectedAccent === option.value;

          return (
            <button
              className={isSelected ? 'site-theme-option site-theme-option--selected' : 'site-theme-option'}
              type="button"
              role="radio"
              aria-checked={isSelected}
              key={option.value}
              onClick={() => setSelectedAccent(option.value)}
              disabled={isLoading || isSaving}
            >
              <span className={`site-theme-option__swatch site-theme-option__swatch--${option.value}`} aria-hidden="true" />
              <span className="site-theme-option__copy">
                <strong>{option.label}</strong>
                <span>{option.description}</span>
              </span>
              {isSelected && <Check size={18} aria-hidden="true" />}
            </button>
          );
        })}
      </div>

      <div className="site-theme-admin__actions">
        <span>현재 적용: {getAccentLabel(savedAccent)}</span>
        <button
          className="button button--primary"
          type="button"
          onClick={handleSave}
          disabled={isLoading || isSaving || selectedAccent === savedAccent}
        >
          {isSaving ? '적용 중...' : '테마 적용'}
        </button>
      </div>
    </section>
  );
};

export default SiteThemeSettings;
