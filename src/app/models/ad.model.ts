export default interface IAd {
    titre: string,
    corps: string,
    prix: number,
    categorie: string,
    tel: string,
    img1?: IImg,
    img2?: IImg,
    img3?: IImg,
    img4?: IImg,
    _id?: string,
    userId?: string
}


interface IImg {
    imgSmall: string,
    imgMedium: string,
    imgNormal: string,
    imgBig: string,
}