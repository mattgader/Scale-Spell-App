const chromaticFlats = [
    'C', 'Db', 'D', 'Eb', 'E', 'F', 
    'Gb', 'G', 'Ab', 'A', 'Bb', 'B'
]

const chromaticSharps = [
    'C', 'C#', 'D', 'D#', 'E', 'F',
    'F#', 'G', 'G#', 'A', 'A#', 'B'
]

const flatKeys = [
    'C', 'F', 'Bb', 'Eb', 'Ab', 'Db', 'Gb'
]

const sharpKeys = [
    'G', 'D', 'A', 'E', 'B', 'F#', 'C#'
]

const diatonicSequence = [
    2, 2, 1, 2, 2, 2, 1
]

function spellScale (key, mode = 0) {
    const scale = []
    let root = null
    let chromatic = null
    if (flatKeys.includes(key)) {
        root = chromaticFlats.indexOf(key)
        scale.push(chromaticFlats[root])
        chromatic = chromaticFlats
    }
    if (sharpKeys.includes(key)) {
        root = chromaticSharps.indexOf(key)
        scale.push(chromaticSharps[root])
        chromatic = chromaticSharps
    }
    for (let i = 0; i < 7; i++) {
        let x = diatonicSequence[(mode % 7) + i]
        scale.push(chromatic[(root + x) % 12])
        root = root + x
    }
    return scale
}

function nextNote (note, interval) {
    let index = 0
    let next = 0
    if (note.includes('b')) {
        index = chromaticFlats.indexOf(note)
        next = chromaticFlats[(index + interval) % 12]
    } else if (note.includes('#')) {
        index = chromaticSharps.indexOf(note)
        next = chromaticSharps[(index + interval) % 12]
    // } else if ((interval = 1) && (note = 'C')) {
    //     next = 'Db'
    // } else if ((interval = 1) && (note = 'F')) {
    //     next = 'Gb'
    } else if (interval === 2 && note === 'B') {
        next = 'C#'
    } else if (interval === 2 && note === 'E') {
        next = 'F#'
    } else {
        index = chromaticFlats.indexOf(note)
        next = chromaticFlats[(index + interval) % 12]
    }
    return next

}
// console.log(spellScale('C'))
// console.log(chromaticFlats[1])
// spellScale('C')
console.log(nextNote('B', 2))

// window.spellScale = spellScale