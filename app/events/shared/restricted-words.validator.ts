import { FormControl } from '@angular/forms'

export function restrictedWords(words) {
        return (control: FormControl): { [key: string]: any } => {
            if (!words) return null

            var invalidWords = words
                .map(w => control.value.includes(w) ? w : null) // if control includes the words passed in as an argument, the control is invalid
                .filter(w => w != null) // filter to show words that are not null (???)

            return invalidWords && invalidWords.length > 0 ? { 'restrictedWords': invalidWords.join(', ') } : null
        }
    }