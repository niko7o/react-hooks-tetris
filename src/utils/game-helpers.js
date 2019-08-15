export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

/*
 * For each row (STAGE_WIDTH -> 20), create 12 cells
 * and fill them up with the cell states 0 or 'clear'
 */
export const createStage = () =>
    Array.from(Array(STAGE_HEIGHT), () =>
        new Array(STAGE_WIDTH).fill([0, 'clear'])
    )
