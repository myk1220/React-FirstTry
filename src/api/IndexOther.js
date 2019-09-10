import base from './base'
import { getData } from './utils/http'

const other ={
    getOther(){
        return getData(base.publicUrl+base.IndexOther)
    }
}

export default other