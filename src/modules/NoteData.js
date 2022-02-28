import React from 'react'


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
    } if (key === 'Gb') {
        scale[3] = 'Cb'
    }  
    // could attempt Cb, which isn't in 'chromaticFlats'
    if (key === 'F#') {
        scale[6] = 'E#'
    } if (key === 'C#') {
        scale[2] = 'E#'
        scale[6] = 'B#'
    }
    return scale
}

function checkScale (root, inputScale) {
    const scale = spellScale(root)
    console.log('data ' + scale)
    console.log('input ' + inputScale)
    for (let i = 0; i < 8; i++) {
        if (scale[i] !== inputScale[i]) {
            return false
        } 
    }
    return true
}

function nextNote (note, interval) {
    let index = 0
    let next = 0
    let nextIndex = 0
    if (note.includes('#')) {
        index = chromaticSharps.indexOf(note)
        nextIndex = parseInt(index) + parseInt(interval)
        next = chromaticSharps[(nextIndex) % 12]
        // couldn't get if (a && b) to work
    } else if (note === 'E') {
        if (parseInt(interval) === 2) {
            next = 'F#'
        }
    } else if (note === 'B') {
        if (parseInt(interval) === 2) {
            next = 'C#'
        }
    } else if (note === 'E') {
        if (parseInt(interval) === 1) {
            next = 'X'
        }
    } else {
        index = chromaticFlats.indexOf(note)
        nextIndex = parseInt(index) + parseInt(interval)
        next = chromaticFlats[(nextIndex) % 12]
    }
    return next
}

export { checkScale, nextNote }

// window.spellScale = spellScale