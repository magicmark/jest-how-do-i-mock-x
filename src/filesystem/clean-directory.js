import fs from 'fs';
import path from 'path';

// Directory that we want to delete the contents of
const DIR_TO_CLEAN = '/foo/bar/baz';

/**
 * Delete every file in DIR_TO_CLEAN
 *
 * @return number of files deleted
 */
export default function cleanDirectory() {
    const files = fs.readdirSync(DIR_TO_CLEAN).map((f) => path.join(DIR_TO_CLEAN, f));

    files.forEach((file) => {
        fs.unlinkSync(file);
    });

    return files.length;
}
