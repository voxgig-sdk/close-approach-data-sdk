import { CloseApproachDataEntityBase } from '../CloseApproachDataEntityBase';
import type { CloseApproachDataSDK } from '../CloseApproachDataSDK';
import type { Control } from '../types';
import type { Cadapi, CadapiListMatch } from '../CloseApproachDataTypes';
declare class CadapiEntity extends CloseApproachDataEntityBase<Cadapi> {
    constructor(client: CloseApproachDataSDK, entopts: any);
    make(this: CadapiEntity): CadapiEntity;
    list(this: any, reqmatch?: CadapiListMatch, ctrl?: Control): Promise<CadapiEntity[]>;
}
export { CadapiEntity };
