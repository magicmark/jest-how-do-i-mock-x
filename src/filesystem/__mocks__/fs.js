import { Volume } from 'memfs';

const vol = new Volume();

export function __setVolumeContents(volumeJson) {
    vol.reset();
    vol.fromJSON(volumeJson);
}

export default vol;
