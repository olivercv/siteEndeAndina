import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LightboxModule } from 'ngx-lightbox';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ComponentsComponent } from './components/components.component';
import { AboutComponent } from './pages/about/about.component';
import * as $ from 'jquery';
import * as jQuery from 'jquery';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { OwlModule } from 'ngx-owl-carousel';
import { PartnersComponent } from './components/partners/partners.component';
import { SliderComponent } from './components/slider/slider.component';
import { SwiperModule, SWIPER_CONFIG, SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { SkillsComponent } from './components/skills/skills.component';
import { CorpComponent } from './components/corp/corp.component';
import { OdometerComponent } from './components/odometer/odometer.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { TeamComponent } from './components/team/team.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { EntreriosComponent } from './pages/entrerios/entrerios.component';
import { NewsComponent } from './pages/news/news.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DelsurComponent } from './pages/delsur/delsur.component';
import { WarnesComponent } from './pages/warnes/warnes.component';
import { VideotubeComponent } from './pages/videotube/videotube.component';
import { YoutubePipe } from './pipes/youtube.pipe';
import { HistoryComponent } from './pages/history/history.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { AnualreportComponent } from './pages/anualreport/anualreport.component';
import { EstructuraComponent } from './pages/estructura/estructura.component';
import { NopageComponent } from './pages/nopage/nopage.component';
import { TarifaComponent } from './pages/tarifa/tarifa.component';
import { GestionsocialComponent } from './pages/gestionsocial/gestionsocial.component';
import { FichaComponent } from './pages/ficha/ficha.component';
import { RrhhComponent } from './pages/rrhh/rrhh.component';
import { PestrategicoComponent } from './pages/pestrategico/pestrategico.component';
import { CcpteriComponent } from './pages/ccpteri/ccpteri.component';
import { CcptsurComponent } from './pages/ccptsur/ccptsur.component';
import { CcptwarComponent } from './pages/ccptwar/ccptwar.component';
import { SubmenuComponent } from './components/submenu/submenu.component';
import { CiclosComponent } from './pages/ciclos/ciclos.component';
import { PoaComponent } from './pages/poa/poa.component';
import { PresupuestoComponent } from './pages/presupuesto/presupuesto.component';
import { ProyeccionesComponent } from './pages/proyecciones/proyecciones.component';

import 'chartjs-plugin-zoom';
import {ChartsModule} from 'ng2-charts';
import { DenunciaComponent } from './pages/denuncia/denuncia.component';
import { SolicitudInformacionComponent } from './pages/solicitud-informacion/solicitud-informacion.component';
import { AdquisicionesComponent } from './pages/adquisiciones/adquisiciones.component';





const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    ComponentsComponent,
    AboutComponent,
    CarruselComponent,
    PartnersComponent,
    SliderComponent,
    NewsComponent,
    SkillsComponent,
    CorpComponent,
    OdometerComponent,
    TestimonialComponent,
    TeamComponent,
    ProyectsComponent,
    EntreriosComponent,
    ContactComponent,
    DelsurComponent,
    WarnesComponent,
    VideotubeComponent,
    YoutubePipe,
    HistoryComponent,
    GalleryComponent,
    AnualreportComponent,
    EstructuraComponent,
    NopageComponent,
    TarifaComponent,
    GestionsocialComponent,
    FichaComponent,
    RrhhComponent,
    PestrategicoComponent,
    CcpteriComponent,
    CcptsurComponent,
    CcptwarComponent,
    SubmenuComponent,
    CiclosComponent,
    PoaComponent,
    PresupuestoComponent,
    ProyeccionesComponent,
    DenunciaComponent,
    SolicitudInformacionComponent,
    AdquisicionesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    LightboxModule,
    OwlModule,
    SwiperModule,
    HttpClientModule,
    ChartsModule

  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
