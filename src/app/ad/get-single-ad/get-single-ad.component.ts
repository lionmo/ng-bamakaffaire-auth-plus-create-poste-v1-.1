import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import IAd from 'src/app/models/ad.model';
import { AdService } from 'src/app/services/ad.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-get-single-ad',
  templateUrl: './get-single-ad.component.html',
  styleUrls: ['./get-single-ad.component.scss']
})
export class GetSingleAdComponent implements OnInit, OnDestroy {

  biggerImg = ''
  normalImg = ''
  post: IAd = {
    titre: '',
    corps: '',
    prix: 0,
    categorie: '',
    tel: ''
  }

  nb = 15235242
  constructor(
    public modal: ModalService,
    private adService: AdService,
    private router: ActivatedRoute
  ) { 
    const id = router.snapshot.paramMap.get('id')
    if(id) {
      adService.getSingleAd(id).subscribe(response => {
        this.post = {...response}
        if(this.post.img1) {
          this.normalImg = this.post?.img1.imgNormal
          this.biggerImg = this.post?.img1.imgBig
        }
        console.log(this.post);
        
      })
    }
  }

  ngOnInit(): void {
    this.modal.register('singleAd')
  }
  ngOnDestroy(): void {
    this.modal.unregister('singleAd')
  }

  changeNormalImg(event: any) { 
    this.normalImg =  event.target.nextElementSibling.src
    this.biggerImg = event.target.nextElementSibling.nextElementSibling.src
  }
}
