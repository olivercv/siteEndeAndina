import { Component, OnInit, OnDestroy } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';

declare var $;
import Lity from 'lity';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-videotube',
  templateUrl: './videotube.component.html',
  styleUrls: ['./videotube.component.scss']
})
export class VideotubeComponent implements OnInit, OnDestroy {

  listVideos: any[] = [];
  videoId: string;
  subscription: Subscription;

  constructor(private youtube: YoutubeService) {
    this.subscription = this.youtube.obtenerVideos().subscribe((resp: any) => {
      // console.log(resp);
      this.listVideos =  resp.items;
    });

   }


  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    // console.log('La pagina se va  cerrar');
    this.subscription.unsubscribe();
  }

  detalleVideo(detalle: string) {
    // console.log(detalle);
    this.videoId = detalle;
    $('#exampleModal').modal();
  }

  cerrarModal() {
    this.videoId = null;
    $('#exampleModal').modal('hide');
  }

  openVideo(video: string) {
    if (video == null || video === '') {

    } else {
      Lity('https://www.youtube.com/watch?v=' + video);
    }
  }

}
