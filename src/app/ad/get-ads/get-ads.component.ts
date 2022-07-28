import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import IAd from 'src/app/models/ad.model';
import { AdService } from 'src/app/services/ad.service';

@Component({
  selector: 'app-get-ads',
  templateUrl: './get-ads.component.html',
  styleUrls: ['./get-ads.component.scss']
})
export class GetAdsComponent implements OnInit, OnDestroy {
  id = ''

  constructor(
    public adService: AdService,
    private router: ActivatedRoute
  ) {

     this.router.params.subscribe(param => {
      console.log(param);
      if(param['id'] === undefined) {
        this.id = 'all'
        if (this.adService.categoriesId.get(this.id) === undefined) {
          this.adService.setCategorieId(this.id)
        }
      }
      else {
        this.id = param['id']
        if(this.adService.categoriesId.get(this.id) === undefined) {
          this.adService.setCategorieId(this.id)
        }
      }

      this.adService.getAds(this.id).subscribe(posts => {
        if(posts.length > 0) {
          this.adService.categoriesId.get(this.id).postsArray.push(...posts)
          console.log(adService.categoriesId.get(this.id).postsArray);
          this.adService.categoriesId.get(this.id).skip+= posts.length
          console.log(this.adService.categoriesId.get(this.id).skip);
        }
      })
     })
   }

  ngOnInit(): void {
    window.addEventListener('scroll', this.handleScroll)
    console.log(this.adService.categoriesId.get(this.id).postsArray);
    
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.handleScroll)
  }
  handleScroll = () => {
    if(this.adService.categoriesId.get(this.id).pendingRequest) return;
    const { offsetHeight, scrollTop } = document.documentElement
    const { innerHeight } = window
    const scrollPourcentage = (scrollTop + innerHeight) / offsetHeight
    
    if(scrollPourcentage > 0.90) {
      this.adService.categoriesId.get(this.id).pendingRequest = true
      this.adService.getAds(this.id).subscribe(posts => {
        if(posts.length > 0) {
          this.adService.categoriesId.get(this.id).postsArray.push(...posts)
          console.log(this.adService.categoriesId.get(this.id).postsArray);
          this.adService.categoriesId.get(this.id).skip+= posts.length
          console.log(this.adService.categoriesId.get(this.id).skip);
          this.adService.categoriesId.get(this.id).pendingRequest = false
        }
    })
    }
    
  }
  showPost = () => {

  }
}
