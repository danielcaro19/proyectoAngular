export class Solar{
  private _id: number
  _direccion: {
    calle: string
    numero: number
  }
  private _localidad: string
  private _superficie: number
  private _luz: boolean
  private _agua: boolean
  private _f_subida: Date

  constructor(id:number,calle:string,numero:number,localidad:string,superficie:number,luz:boolean,agua:boolean,f_subida:Date){
      this._id = id,
      this._direccion = {
          calle,
          numero,
      }
      this._localidad = localidad,
      this._superficie = superficie,
      this._luz = luz,
      this._agua = agua,
      this._f_subida = f_subida
  }

  get id(){
      return this._id
  }

  get direccion(){
      return 
  }

  get localidad(){
      return this._localidad
  }

  get superficie(){
      return this._superficie
  }

  get luz(){
      return this._luz
  }

  get agua(){
      return this._agua
  }

  get f_subida(){
      return this._f_subida
  }

  setprecio(p_t: number,_p_m: number){
      var precio = (this._superficie * _p_m ) + p_t
      return precio
  }

  get precio(){
      return this.precio
  }
}