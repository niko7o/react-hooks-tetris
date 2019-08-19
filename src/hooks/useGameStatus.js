import { useState, useEffect, useCallback } from 'react';

export const useGameStatus = rowsCleared => {
    const [score, setScore] = useState(0);
    const [rows, setRows] = useState(0);
    const [level, setLevel] = useState(0);

    const pointsPerRowSweep = [
        40, // one row
        100, // two rows
        300, // three rows
        1200 // four rows
    ];

    const calculateScore = useCallback(() => {
        if (rowsCleared > 0) {
            setScore(prev => prev + pointsPerRowSweep[rowsCleared - 1] * (level + 1));
            setRows(prev => prev + rowsCleared);
        }
    }, [level, pointsPerRowSweep, rowsCleared]);

    useEffect(() => {
        calculateScore();
    }, [calculateScore, rowsCleared, score]);

    return [score, setScore, rows, setRows, level, setLevel];
}