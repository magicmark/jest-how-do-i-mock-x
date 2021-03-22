import { Volume } from 'memfs';
import { Union } from 'unionfs';

const ufs = new Union();
const vol = new Volume();
ufs.use(vol);

export function __setVolumeContents(volumeJson) {
    vol.reset();
    vol.fromJSON(volumeJson);
}

export default ufs;
