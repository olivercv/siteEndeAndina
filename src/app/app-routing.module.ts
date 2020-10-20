import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsComponent } from './components/components.component';
import { AboutComponent } from './pages/about/about.component';
import { EntreriosComponent } from './pages/entrerios/entrerios.component';
import { NewsComponent } from './pages/news/news.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DelsurComponent } from './pages/delsur/delsur.component';
import { WarnesComponent } from './pages/warnes/warnes.component';
import { VideotubeComponent } from './pages/videotube/videotube.component';
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
import { CiclosComponent } from './pages/ciclos/ciclos.component';
import { PoaComponent } from './pages/poa/poa.component';
import { PresupuestoComponent } from './pages/presupuesto/presupuesto.component';
import { ProyeccionesComponent } from './pages/proyecciones/proyecciones.component';
import { DenunciaComponent } from './pages/denuncia/denuncia.component';
import { SolicitudInformacionComponent } from './pages/solicitud-informacion/solicitud-informacion.component';
import { AdquisicionesComponent } from './pages/adquisiciones/adquisiciones.component';
import { ConvocatoriasComponent } from './pages/convocatorias/convocatorias.component';
import { NewComponent } from './pages/new/new.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: '**', redirectTo: 'error404', pathMatch: 'full' },
  { path: 'home',   component: ComponentsComponent },
  { path: 'about',  component: AboutComponent },
  { path: 'entrerios',  component: EntreriosComponent },
  { path: 'delsur',  component: DelsurComponent },
  { path: 'warnes',  component: WarnesComponent },
  { path: 'ccpteri',  component: CcpteriComponent },
  { path: 'ccptsur',  component: CcptsurComponent },
  { path: 'ccptwar',  component: CcptwarComponent },
  { path: 'ciclos',  component: CiclosComponent },
  { path: 'news',  component: NewsComponent },
  { path: 'new/:id',  component: NewComponent },
  { path: 'contact',  component: ContactComponent },
  { path: 'canal',  component: VideotubeComponent },
  { path: 'history',  component: HistoryComponent },
  { path: 'gallery',  component: GalleryComponent },
  { path: 'reports',  component: AnualreportComponent },
  { path: 'estructura',  component: EstructuraComponent },
  { path: 'tarifa',  component: TarifaComponent },
  { path: 'ficha',  component: FichaComponent },
  { path: 'rrhh',  component: RrhhComponent },
  { path: 'planestrategico',  component: PestrategicoComponent },
  { path: 'gestionsocial',  component: GestionsocialComponent },
  { path: 'poa',  component: PoaComponent },
  { path: 'presupuesto',  component: PresupuestoComponent },
  { path: 'proyecciones',  component: ProyeccionesComponent },
  { path: 'denuncia',  component: DenunciaComponent },
  { path: 'solicitud',  component: SolicitudInformacionComponent },
  { path: 'convocatorias',  component: ConvocatoriasComponent },
  { path: 'error404',  component: NopageComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes, {initialNavigation: 'enabled', useHash: false, scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
