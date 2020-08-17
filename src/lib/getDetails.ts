import {getEncoding} from './getEncoding';
import {getMessageCount} from './getMessageCount';
import {getCharLimits} from './getCharLimits';
import {CounterStats} from './types';
import {getCharsCount} from './getCharsCount';
import {getMessages} from './getMessages';
import {getCharLimit} from './getCharLimit';

export const getDetails = (textarea: HTMLTextAreaElement): CounterStats => {
    const letters = textarea.value.split('');
    const encoding = getEncoding(letters);
    const charCount = getCharsCount(encoding, letters);
    const charLimits = getCharLimits(encoding, charCount);
    const msgCount = getMessageCount(charCount, charLimits, encoding);
    const isMulti = msgCount > 1;
    const charLimit = getCharLimit(isMulti, encoding);

    return {
        charCount,
        charLimit,
        encoding,
        messages: getMessages(encoding, isMulti, letters, msgCount, charLimit),
        msgCount,
    };
};