const { createFsFromVolume, Volume } = require('memfs');

const vol = new Volume();

export function __setVolumeContents(volumeJson) {
    vol.reset();
    vol.fromJSON(volumeJson);
}

const fs = createFsFromVolume(vol);

fs.__setVolumeContents = __setVolumeContents;

module.exports = fs;
