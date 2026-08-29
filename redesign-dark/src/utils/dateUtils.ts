import { Timestamp } from 'firebase/firestore';
import type { ContentDate } from './firebase';

export const contentDateToSeconds = (timestamp: ContentDate | null | undefined): number => {
  if (!timestamp) return 0;
  if (timestamp instanceof Timestamp) return timestamp.seconds;
  if (timestamp instanceof Date) return timestamp.getTime() / 1000;
  if (typeof timestamp === 'object' && 'seconds' in timestamp) return timestamp.seconds;
  if (typeof timestamp === 'string') {
    const parsed = Date.parse(timestamp);
    return Number.isNaN(parsed) ? 0 : parsed / 1000;
  }
  if (typeof timestamp === 'number') return timestamp > 9_999_999_999 ? timestamp / 1000 : timestamp;
  return 0;
};

/**
 * 다양한 날짜 타입을 한글 형식으로 포맷팅 (2025년 4월 19일 오후 8:07)
 */
export const formatDateKorean = (timestamp: ContentDate | null | undefined): string => {
  if (!timestamp) return '날짜 없음';

  try {
    let date: Date;

    if (timestamp instanceof Date) {
      date = timestamp;
    } else if (timestamp instanceof Timestamp || (typeof timestamp === 'object' && timestamp?.seconds !== undefined)) {
      date = new Date(timestamp.seconds * 1000);
    } else if (typeof timestamp === 'string') {
      date = new Date(timestamp);
    } else if (typeof timestamp === 'number') {
      date = new Date(timestamp);
    } else {
      return '날짜 형식 오류';
    }

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    const ampm = hours < 12 ? '오전' : '오후';
    const hour12 = hours % 12 || 12;

    return `${year}년 ${month}월 ${day}일 ${ampm} ${hour12}:${minutes.toString().padStart(2, '0')}`;
  } catch (error) {
    console.error('날짜 형식 변환 오류:', error);
    return '날짜 변환 오류';
  }
};
