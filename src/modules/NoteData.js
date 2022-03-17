const chromaticFlats = [
    'C', 'Db', 'D', 'Eb', 'E', 'F', 
    'Gb', 'G', 'Ab', 'A', 'Bb', 'B'
]

const chromaticSharps = [
    'C', 'C#', 'D', 'D#', 'E', 'F',
    'F#', 'G', 'G#', 'A', 'A#', 'B'
]

const flatKeys = [
    'C', 'F', 'Bb', 'Eb', 'Ab', 'Db', 'Gb', 'Cb'
]

const diatonicSequence = [
    2, 2, 1, 2, 2, 2, 1
]

const enharmonic = {
    1: {
        'E#': 'F#', 
        'B#': 'C#',
        'Bb': 'Cb',
        'Eb': 'Fb'
    },
    2: {
        'A#': 'B#',
        'D#': 'E#',
        'B': 'C#',
        'E': 'F#'
    }
}

function spellScale (key, mode = 0) {
    const scale = [];
    const chromatic = flatKeys.includes(key) ? 
        chromaticFlats : 
        chromaticSharps;
    let noteIndex = chromatic.indexOf(key);
    scale.push(chromatic[noteIndex]);
    return spellScaleHelper(scale, mode, noteIndex, chromatic);
}

function spellScaleHelper(scale, mode, noteIndex, chromatic) {
    for (let i = 0; i < 7; i++) {
        let step = diatonicSequence[(mode % 7) + i];
        scale.push(chromatic[(noteIndex + step) % 12]);
        noteIndex = noteIndex + step;
    } 
    if (scale[0] === 'Gb') {
        scale[3] = 'Cb';
    } 
    if (scale[0] === 'F#') {
        scale[6] = 'E#';
    } 
    if (scale[0] === 'C#') {
        scale[2] = 'E#';
        scale[6] = 'B#';
    }
    return scale;
}

function checkScale (root, inputScale) {
    const scale = spellScale(root);
    for (let i = 0; i < 8; i++) {
        if (scale[i] !== inputScale[i]) {
            return false;
        } 
    }
    return true;
}

function nextNote (note, interval) {
    if (enharmonicNextNote(note, interval) !== 0) {
        return enharmonicNextNote(note, interval);
    } 
    const chromatics = note.includes('#') ? 
        chromaticSharps :
        chromaticFlats;
    const index = chromatics.indexOf(note);
    const nextIndex = parseInt(index) + parseInt(interval);
    const next = chromatics[(nextIndex) % 12];
    return next;
}

function enharmonicNextNote (note, interval) {
    let next = 0
    const enh = enharmonic[interval];
    const enhNotes = Object.keys(enh)
    if (enhNotes.includes(note)) {
        next = enh[note];
    }
    return next;
}

export { checkScale, nextNote };
