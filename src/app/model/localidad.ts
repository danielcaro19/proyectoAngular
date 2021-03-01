export class Claselocalidad{
    _localidad: string;
    _p_m: number;
    _p_l: number;
    _p_a: number;

    constructor(_localidad: string, _p_m: number,_p_l: number,_p_a: number){
        this._localidad = _localidad;
        this._p_m = _p_m;
        this._p_l= _p_l;
        this._p_a= _p_a;
    }

    get localidad(){
        return this._localidad
    }

    get p_m(){
        return this._p_m
    }

    get p_l(){
        return this._p_l
    }

    get p_a(){
        return this._p_a
    }

    setp_t(_p_a: number, _p_l: number){
        var p_t = (this._p_a + this._p_l)
        return p_t
    }
}