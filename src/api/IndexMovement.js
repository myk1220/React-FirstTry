import base from './base';
import { getData } from './utils/http';

const movement = {
    getIndexMovement(){
        return getData(base.publicUrl+base.IndexMovement);
    }
}

export default movement
