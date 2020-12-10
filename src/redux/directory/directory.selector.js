import {createSelector } from 'reselect';

const getDirectory = state => state.directory;

const directorySelector = createSelector(
    getDirectory,
    directory => directory.sections
)

export default directorySelector;