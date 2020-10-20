import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from '../config/global.service';
import { Idocument, IConvocatories } from '../interfaces/interfaces';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ConvocatoriasService {
  total = 0;
  public uri: string;

  constructor(public http: HttpClient, public router: Router) {
    this.uri = GLOBAL.urlServices;
   }

  // data = [
  //   {
  //     section : 'CONVOCATORIA  N° 20-09-0048',
  //     type: 'vigentes',
  //     title: 'ROPA DE TRABAJO Y BOTAS DE SEGURIDAD GESTION 2020',
  //     Inital: '06/10/2020',
  //     meeting: '',
  //     presentation: '16/10/2020 11:00',
  //     detail: '',
  //     docs: [{
  //             title: '1. Invitacion Propuestas ROPA DE TRABAJO Y BOTAS DE SEGURIDAD 20-09-0048',
  //             url: 'assets/doc/adquisiciones/20/1.Invitacion_Propuestas_ROPA_DE_TRABAJO_Y_BOTAS_DE_SEGURIDAD_20-09-0048.pdf',
  //             type: 'fa-file-pdf',
  //           },
  //           {
  //             title: '2. Pliego de Condiciones ROPA DE TRABAJO Y BOTAS DE SEGURIDAD 20-09-0048',
  //             url: 'assets/doc/adquisiciones/20/2.Pliego_de_Condiciones_ROPA_DE_TRABAJO_Y_BOTAS_DE_SEGURIDAD_20-09-0048.pdf',
  //             type: 'fa-file-pdf'
  //           },
  //           {
  //             title: '3. Especificaciones Técnicas  ROPA DE TRABAJO Y BOTAS DE SEGURIDAD 20-09-0048',
  //             url: 'assets/doc/adquisiciones/20/3.Especificaciones_Tecnicas_ROPA_DE_TRABAJO_Y_BOTAS_DE_SEGURIDAD_20-09-0048.pdf',
  //             type: 'fa-file-pdf'
  //           },
  //           {
  //             title: '4. Formulario Anexo I  ROPA DE TRABAJO Y BOTAS DE SEGURIDAD 20-09-0048',
  //             url: 'assets/doc/adquisiciones/20/4.Formulario_Anexo_I_ROPA_DE_TRABAJO_Y_BOTAS_DE_SEGURIDAD_20-09-0048.xlsx',
  //             type: 'fa-file-excel'
  //           },
  //           {
  //             title: '5. Formulario Anexo II ROPA DE TRABAJO Y BOTAS DE SEGURIDAD 20-09-0048',
  //             url: 'assets/doc/adquisiciones/20/5.Formulario_Anexo_II_ROPA_DE_TRABAJO_Y_BOTAS_DE_SEGURIDAD_20-09-0048.xlsx',
  //             type: 'fa-file-excel'
  //           }
  //         ]
  //   },
  //   {
  //     section : 'CONVOCATORIA  N° 20-08-0017',
  //     type: 'concluidas',
  //     title: 'SERVICIO DE LIMPIEZA OFICINA CENTRAL',
  //     Inital: '16/09/2020',
  //     meeting: '',
  //     presentation: '22/09/2020 14:00',
  //     detail: '',
  //     docs: [{
  //             title: '1. Invitacion Propuesta Limpieza oficina central 20-08-0017',
  //             url: 'assets/doc/adquisiciones/19/1.Invitacion_Propuesta_Limpieza_oficina_central_20-08-0017.pdf',
  //             type: 'fa-file-pdf',
  //           },
  //           {
  //             title: '2. TDR Proceso Servicio de Limpieza of. Cbba. 20-08-0017',
  //             url: 'assets/doc/adquisiciones/19/2.TDR_Proceso_Servicio_de_Limpieza_of_Cbba_20-08-0017.pdf',
  //             type: 'fa-file-pdf'
  //           },
  //           {
  //             title: '3. Pliego de Condiciones Proceso 20-08-0017 Servicio de Limpieza Of. Cbba.',
  //             url: 'assets/doc/adquisiciones/19/3.Pliego_de_Condiciones_Proceso_20-08-0017_Servicio_de_Limpieza_Of_Cbba.pdf',
  //             type: 'fa-file-pdf'
  //           },
  //           {
  //             title: '4. FORMULARIO anexo I SERVICIO DE LIMPIEZA OFICINA CENTRAL',
  //             url: 'assets/doc/adquisiciones/19/4.FORMULARIO_anexo_I_SERVICIO_DE_LIMPIEZA_OFICINA_CENTRAL.xlsx',
  //             type: 'fa-file-excel'
  //           },
  //           {
  //             title: '5. FORMULARIO  anexo II SERVICIO DE LIMPIEZA OFICINA CENTRAL',
  //             url: 'assets/doc/adquisiciones/19/5.FORMULARIO_anexo_II_SERVICIO_DE_LIMPIEZA_OFICINA_CENTRAL.xlsx',
  //             type: 'fa-file-excel'
  //           },
  //           {
  //             title: '6. FORMULARIOS SERVICIO LIMPIEZA OFICINA CENTRAL',
  //             url: 'assets/doc/adquisiciones/19/6.FORMULARIOS_SERVICIO_LIMPIEZA_OFICINA_CENTRAL.xlsx',
  //             type: 'fa-file-excel'
  //           }
  //         ]
  //   },
  //   {
  //     section : 'CONVOCATORIA  N° 20-09-0001',
  //     type: 'concluidas',
  //     title: 'CONSTRUCCION LAGUNA 4 Y OBRAS COMPLEMENTARIAS LAGUNAS 2 Y 3 PLANTA TERMOELECTRICA WARNES',
  //     Inital: '16/09/2020',
  //     meeting: '',
  //     presentation: '24/09/2020 11:00',
  //     detail: '',
  //     docs: [{
  //             title: '1. Invitacion Proceso 20-09-0001 CONSTRUCCION LAGUNA 4 Y OBRAS COMPLEMENTARIAS LAGUNAS 2 Y 3 PTWAR',
  //             url: 'assets/doc/adquisiciones/18/1.Invitacion_Proceso_20-09-0001_CONSTRUCCION_LAGUNA_4_Y_OBRAS_COMPLEMENTARIAS_LAGUNAS_2_Y_3_PTWAR.pdf',
  //             type: 'fa-file-pdf',
  //           },
  //           {
  //             title: '2. Pliego de Concidicones Proceso 20-09-0001 Construccion Laguna 4 y Obras complementaria lag. 2 y 3',
  //             url: 'assets/doc/adquisiciones/18/2.Pliego_de_Concidicones_Proceso_20-09-0001_Construccion_Laguna_4_y_Obras_complementaria_lag_2_y_3.pdf',
  //             type: 'fa-file-pdf'
  //           },
  //           {
  //             title: '3. TERMINOS DE REFERENCIA LAGUNA 4 PT WARNES',
  //             url: 'assets/doc/adquisiciones/18/3.TERMINOS_DE_REFERENCIA_LAGUNA_4_PT_WARNES.pdf',
  //             type: 'fa-file-pdf'
  //           },
  //           {
  //             title: '4. Especificaciones Técnicas Generales Construcción Laguna 4 Comp. L2 y L3 PTWAR',
  //             url: 'assets/doc/adquisiciones/18/4.Especificaciones_Tecnicas_Generales_Construccion_Laguna_4_Comp_L2_y_L3_PTWAR.pdf',
  //             type: 'fa-file-pdf'
  //           },
  //           {
  //             title: '5. Especificaciones Técnicas Específicas Construcción Laguna 4 Comp. L2 y L3 PTWAR',
  //             url: 'assets/doc/adquisiciones/18/5.Especificaciones_Tecnicas_Especificas_Construccion_Laguna_4_Comp_L2_y_L3_PTWAR.pdf',
  //             type: 'fa-file-pdf'
  //           },
  //           {
  //             title: '6. Planos Construcción Laguna 4 y Obras Complementarias Lagunas 2 y 3 PTWAR',
  //             url: 'assets/doc/adquisiciones/18/6.Planos_Construccion_Laguna_4_y_Obras_Complementarias_Lagunas_2_y_3_PTWAR.pdf',
  //             type: 'fa-file-pdf'
  //           },
  //           {
  //             title: '7. Resumen Items y Cantidades  de Proyecto Construcción Laguna 4 Comp. L2 y L3 PTWAR',
  //             url: 'assets/doc/adquisiciones/18/7.Resumen_Items_y_Cantidades_de_Proyecto_Construccion_Laguna_4_Comp_L2_y_L3_PTWAR.pdf',
  //             type: 'fa-file-pdf'
  //           }
  //         ]
  //   },
  //   {
  //     section : 'CONVOCATORIA  N° 20-09-0003',
  //     type: 'concluidas',
  //     title: 'SERVICIO DE ALIMENTACIÓN Y ATENCIÓN DE COMEDOR PLANTA TERMOELÉCTRICA SUR',
  //     Inital: '16/09/2020',
  //     meeting: '',
  //     presentation: '23/09/2020 14:00',
  //     detail: '',
  //     docs: [{
  //             title: '1. Invitacion Propuestas SERVICIO ALIMENTACION Y ATENCION COMEDOR PTSUR 20-09-0003',
  //             url: 'assets/doc/adquisiciones/17/1.Invitacion_Propuestas_SERVICIO_ALIMENTACION_Y_ATENCION_COMEDOR_PTSUR_20-09-0003.pdf',
  //             type: 'fa-file-pdf',
  //           },
  //           {
  //             title: '2. TDR SERVICIO ALIMENTACION Y ATENCION COMEDOR PTSUR',
  //             url: 'assets/doc/adquisiciones/17/2.TDR_SERVICIO_ALIMENTACION_Y_ATENCION_COMEDOR_PTSUR.pdf',
  //             type: 'fa-file-pdf'
  //           },
  //           {
  //             title: '3. Pliego de Condiciones Proceso 20-09-0003 SERVICIO ALIMENTACION Y ATENCION COMEDOR PTSUR',
  //             url: 'assets/doc/adquisiciones/17/3.Pliego_de_Condiciones_Proceso_20-09-0003_SERVICIO_ALIMENTACION_Y_ATENCION_COMEDOR_PTSUR.pdf',
  //             type: 'fa-file-pdf'
  //           },
  //           {
  //             title: '4. Formulario A-1 Identificacion del Proponente Anexo I Proceso 20-09-0003',
  //             url: 'assets/doc/adquisiciones/17/4.Formulario_A-1_Identificacion_del_Proponente_Anexo_I_Proceso_20-09-0003.xlsx',
  //             type: 'fa-file-excel'
  //           },
  //           {
  //             title: '5. Formulario B-1 Propuesta Economica ANEXO II Proceso 20-09-0003',
  //             url: 'assets/doc/adquisiciones/17/5.Formulario_B-1_Propuesta_Economica_ANEXO_II_Proceso_20-09-0003.xlsx',
  //             type: 'fa-file-excel'
  //           }
  //         ]
  //   },
  //   {
  //     section : 'CONVOCATORIA  N° 20-08-0008',
  //     type: 'concluidas',
  //     title: 'SERVICIO DE REPARACION Y/O CAMBIO DE ESTATOR DE GENERADOR SINCRONO TRIFASICO MARCA ABB, TIPO AMS 1250A LF',
  //     Inital: '27/08/2020',
  //     meeting: '',
  //     presentation: '08/09/2020 11:00',
  //     detail: '',
  //     docs: [{
  //             title: 'Invitacion Proceso 20-08-0008 REPARACION GENERADOR ABB PTWAR',
  //             url: 'assets/doc/adquisiciones/16/Invitacion_Proceso_20-08-0008_REPARACION_GENERADOR_ABB_PTWAR.pdf',
  //             type: 'fa-file-pdf',
  //           },
  //           {
  //             title: 'PLIEGO DE CONDICIONES SERVICIO REPARACION GENERADOR ABB PTWAR',
  //             url: 'assets/doc/adquisiciones/16/PLIEGO_DE_CONDICIONES_SERVICIO_REPARACION_GENERADOR_ABB_PTWAR.pdf',
  //             type: 'fa-file-pdf'
  //           },
  //           {
  //             title: 'FORMULARIOS PROPUESTA TECNICA REPARACION GENERADOR ABB PTWAR',
  //             url: 'assets/doc/adquisiciones/16/FORMULARIOS_PROPUESTA_TECNICA_REPARACION_GENERADOR_ABB_PTWAR.docx',
  //             type: 'fa-file-word'
  //           },
  //           {
  //             title: 'Formulario A-2 IDENTIFICACION DEL PROPONENTE',
  //             url: 'assets/doc/adquisiciones/16/Formulario_A-2_IDENTIFICACION_DEL_PROPONENTE.xlsm',
  //             type: 'fa-file-excel'
  //           },
  //           {
  //             title: 'Formulario B-1 PROPUESTA ECONOMICA',
  //             url: 'assets/doc/adquisiciones/16/Formulario_B-1_PROPUESTA_ECONOMICA.xlsx',
  //             type: 'fa-file-excel'
  //           },
  //           {
  //             title: '4. Enmienda N° 1 REPARACION GENERADOR ABB',
  //             url: 'assets/doc/adquisiciones/16/4.Enmienda_N_1_REPARACION_GENERADOR_ABB.pdf',
  //             type: 'fa-file-pdf'
  //           },
  //         ]
  //   },
  //   {
  //     section : 'CONVOCATORIA  N° 20-08-0014',
  //     type: 'concluidas',
  //     title: 'AUDITORIA DE ESTADOS FINANCIEROS ENDE ANDINA S.A.M. GESTION 2020',
  //     Inital: '24/08/2020',
  //     meeting: '',
  //     presentation: '31/08/2020 11:00',
  //     detail: '',
  //     docs: [{
  //             title: '1. Invitacion Proceso 20-08-0014 AUDITORIA ESTADOS FINANCIEROS ENDE ANDINA SAM GESTION 2020',
  //             url: 'assets/doc/adquisiciones/15/1.Invitacion_Proceso_20-08-0014_AUDITORIA_ESTADOS_FINANCIEROS_ENDE_ANDINA_SAM_GESTION_2020.pdf',
  //             type: 'fa-file-pdf',
  //           },
  //           {
  //             title: '2. Pliego de Condiciones Proceso 20-08-0014 AUDITORIA ESTADOS FINANCIEROS ENDE ANDINA SAM GESTION 2020',
  //             url: 'assets/doc/adquisiciones/15/2.Pliego_de_Condiciones_Proceso_20-08-0014_AUDITORIA_ESTADOS_FINANCIEROS_ENDE_ANDINA_SAM_GESTION_2020.pdf',
  //             type: 'fa-file-pdf'
  //           },
  //           {
  //             title: '3. FORMULARIOS AUDITORIA A LOS ESTADOS FINANCIEROS GESTION 2020',
  //             url: 'assets/doc/adquisiciones/15/3.FORMULARIOS_AUDITORIA_A_LOS_ESTADOS_FINANCIEROS_GESTION_2020.docx',
  //             type: 'fa-file-word'
  //           },
  //           {
  //             title: 'Enmienda N° 1 CONVOCATORIA 009-2020 Auditoria Estados Financieros ENDE ANDINA SAM Gestion 2020',
  //             url: 'assets/doc/adquisiciones/15/Enmienda_N_1_CONVOCATORIA_009-2020_Auditoria_Estados_Financieros_ENDE_ANDINA_SAM_Gestion_2020.pdf',
  //             type: 'fa-file-pdf'
  //           },
  //           {
  //             title: 'Invitacion Proceso 20-08-0014 AUDITORIA ESTADOS FINANCIEROS ENDE ANDINA SAM GESTION 2020',
  //             url: 'assets/doc/adquisiciones/15/Invitacion_Proceso_20-08-0014_AUDITORIA_ESTADOS_FINANCIEROS_ENDE_ANDINA_SAM_GESTION_2020.pdf',
  //             type: 'fa-file-pdf',
  //           }
  //         ]
  //   },
  //   {
  //     section : 'CONVOCATORIA  N° 20-08-0007',
  //     type: 'concluidas',
  //     title: 'SEGUNDA CONVOCATORIA "INSUMOS DE BIOSEGURIDAD"',
  //     Inital: '21/08/2020',
  //     meeting: '',
  //     presentation: '28/08/2020 11:00',
  //     detail: '',
  //     docs: [{
  //             title: '1. Invitacion Propuestas INSUMOS DE BIOSEGURIDAD Cod. 20-08-0007 SEGUNDA CONVOCATORIA',
  //             url: 'assets/doc/adquisiciones/14/1.Invitacion_Propuestas_INSUMOS_DE_BIOSEGURIDAD_Cod_20-08-0007_SEGUNDA_CONVOCATORIA.pdf',
  //             type: 'fa-file-pdf',
  //           },
  //           {
  //             title: '2. Especificaciones Técnicas INSUMOS DE BIOSEGURIDAD Cod. 20-08-0007 SEGUNDA CONVOCATORIA',
  //             url: 'assets/doc/adquisiciones/14/2.Especificaciones_Tecnicas_INSUMOS_DE_BIOSEGURIDAD_Cod_20-08-0007_SEGUNDA_CONVOCATORIA.pdf',
  //             type: 'fa-file-pdf'
  //           },
  //           {
  //             title: '3. Pliego de Condiciones INSUMOS DE BIOSEGURIDAD Cod. 20-08-0007 SEGUNDA CONVOCATORIA',
  //             url: 'assets/doc/adquisiciones/14/3.Pliego_de_Condiciones_INSUMOS_DE_BIOSEGURIDAD_Cod_20-08-0007_SEGUNDA_CONVOCATORIA.pdf',
  //             type: 'fa-file-pdf'
  //           },
  //           {
  //             title: '4. Anexo I  Cod. 20-08-0007 INSUMOS DE SEGURIDAD',
  //             url: 'assets/doc/adquisiciones/14/4.Anexo_I_Cod_20-08-0007_INSUMOS_DE_SEGURIDAD.xlsx',
  //             type: 'fa-file-excel'
  //           },
  //           {
  //             title: '5. Anexo II Cod. 20-08-0007 INSUMOS DE SEGURIDAD',
  //             url: 'assets/doc/adquisiciones/14/5.Anexo_II_Cod_20-08-0007_INSUMOS_DE_SEGURIDAD.xlsx',
  //             type: 'fa-file-excel'
  //           }
  //         ]
  //   },
  //   {
  //     section : 'CONVOCATORIA  N° 20-06-0027',
  //     type: 'concluidas',
  //     title: 'SEGUNDA CONVOCATORIA REFUNCIONALIZACION OFICINAS ENDE ANDINA COCHABAMBA',
  //     Inital: '',
  //     meeting: '',
  //     presentation: '24/08/2020 11:00',
  //     detail: '',
  //     docs: [{
  //             title: '1. Invitacion REFUNCIONALIZACION OFICINAS ENDE ANDINA CBA - SEGUNDA CONVOCATORIA',
  //             url: 'assets/doc/adquisiciones/12/1.Invitacion_REFUNCIONALIZACION_OFICINAS_ENDE_ANDINA_CBA-SEGUNDA CONVOCATORIA.pdf',
  //             type: 'fa-file-pdf',
  //           },
  //           {
  //             title: '2. ESPECIFICACIONES TECNICAS REFUNCIONALIZACION OFICINAS ENDE ANDINA CBA',
  //             url: 'assets/doc/adquisiciones/12/2.ESPECIFICACIONES_TECNICAS_REFUNCIONALIZACION_OFICINAS_ENDE_ANDINA_CBA.pdf',
  //             type: 'fa-file-pdf'
  //           },
  //           {
  //             title: '3. TERMINOS DE REFERENCIA REFUNCIONALIZACION OFICINAS ENDE ANDINA CBA',
  //             url: 'assets/doc/adquisiciones/12/3.TERMINOS_DE_REFERENCIA_REFUNCIONALIZACION_OFICINAS_ENDE_ANDINA_CBA.pdf',
  //             type: 'fa-file-pdf'
  //           },
  //           {
  //             title: '4.1. PLANO 1',
  //             url: 'assets/doc/adquisiciones/12/4.1.PLANO_1.pdf',
  //             type: 'fa-file-pdf'
  //           },
  //           {
  //             title: '4.2. PLANO 2',
  //             url: 'assets/doc/adquisiciones/12/4.2.PLANO_2.pdf',
  //             type: 'fa-file-pdf'
  //           },
  //           {
  //             title: '4.3. PLANO 3',
  //             url: 'assets/doc/adquisiciones/12/4.3.PLANO_3.pdf',
  //             type: 'fa-file-pdf'
  //           },
  //           {
  //             title: '4.4. PLANO 4',
  //             url: 'assets/doc/adquisiciones/12/4.4.PLANO_4.pdf',
  //             type: 'fa-file-pdf'
  //           },
  //           {
  //             title: '4.5. PLANO 5',
  //             url: 'assets/doc/adquisiciones/12/4.5.PLANO_5.pdf',
  //             type: 'fa-file-pdf'
  //           },
  //           {
  //             title: '5. PLIEGO DE CONDICIONES REFUNCIONALIZACION OFICINAS ENDE ANDINA COCHABAMBA - SEGUNDA CONVOCATORIA',
  //             url: 'assets/doc/adquisiciones/12/5.PLIEGO_DE_CONDICIONES_REFUNCIONALIZACION_OFICINAS_ENDE_ANDINA_COCHABAMBA-SEGUNDA_CONVOCATORIA.pdf',
  //             type: 'fa-file-pdf'
  //           },
  //           {
  //             title: '6. ITEMS DE OBRA REFUNCIONALIZACION OFICINAS ENDE ANDINA CBA',
  //             url: 'assets/doc/adquisiciones/12/6.ITEMS_DE_OBRA_REFUNCIONALIZACION_OFICINAS_ENDE_ANDINA_CBA.xlsx',
  //             type: 'fa-file-excel'
  //           },

  //           {
  //             title: 'ENMIENDA N°1 MODIFICACION DE PLAZO 20-06-0027 REFUNCIONALIZACION OFICINAS ENDE ANDINA COCHABAMBA',
  //             url: 'assets/doc/adquisiciones/12/ENMIENDA_N°1_MODIFICACION_DE_PLAZO_20-06-0027_REFUNCIONALIZACION_OFICINAS_ENDE_ANDINA_COCHABAMBA.pdf',
  //             type: 'fa-file-pdf'
  //           },
  //           {
  //             title: 'FORMULARIOS DE PRESENTACION DE PROPUESTA REFUNCIONALIZACION OFICINAS ENDE ANDINA COCHABAMBA',
  //             url: 'assets/doc/adquisiciones/12/FORMULARIOS_DE_PRESENTACION_DE_PROPUESTA_REFUNCIONALIZACION_OFICINAS_ENDE_ANDINA_COCHABAMBA.docx',
  //             type: 'fa-file-word'
  //           },
  //           {
  //             title: 'Formulario A-2  REFUNCIONALIZACION OFICINAS ENDE ANDINA COCHABAMBA-01',
  //             url: 'assets/doc/adquisiciones/12/Formulario_A-2_REFUNCIONALIZACION_OFICINAS_ENDE_ANDINA_COCHABAMBA-01.xlsm',
  //             type: 'fa-file-excel'
  //           },
  //           {
  //             title: 'Formulario A-2  REFUNCIONALIZACION OFICINAS ENDE ANDINA COCHABAMBA',
  //             url: 'assets/doc/adquisiciones/12/Formulario_A-2_REFUNCIONALIZACION_OFICINAS_ENDE_ANDINA_COCHABAMBA.xlsm',
  //             type: 'fa-file-excel'
  //           }
  //         ]
  //   },
  //   {
  //     section : 'CONVOCATORIA  N° 20-08-0002',
  //     type: 'concluidas',
  //     title: 'INTEGRACION SISTEMA SCADA PLANTAS TERMOELECTRICAS DE ENTRE RIOS, SUR Y WARNES',
  //     Inital: '',
  //     meeting: '',
  //     presentation: '25/08/2020 14:00',
  //     detail: '',
  //     docs: [{
  //             title: '1. Invitacion Proceso 20-08-0002 INTEGRACION SISTEMA SCADA PTS WAR-SUR-ER',
  //             url: 'assets/doc/adquisiciones/13/1_Invitacion_Proceso_20-08-0002_INTEGRACION_SISTEMA_SCADA_PTS_WAR-SUR-ER_new.pdf',
  //             type: 'fa-file-pdf',
  //           },
  //           {
  //             title: '2. Pliego de Condiciones Nro. 20-08-0002 INTEGRACION SISTEMA SCADA PTS WAR-SUR-ER',
  //             url: 'assets/doc/adquisiciones/13/2_Pliego_de_Condiciones_Nro_20-08-0002_INTEGRACION_SISTEMA_SCADA_PTS_WAR_SUR-ER.pdf',
  //             type: 'fa-file-pdf'
  //           },
  //           {
  //             title: '3. Especificaciones Tecnicas INTEGRACION SISTEMA SCADA PTS WAR-SUR-ER',
  //             url: 'assets/doc/adquisiciones/13/3_Especificaciones_Tecnicas_INTEGRACION_SISTEMA_SCADA_PTS_WAR-SUR-ER.pdf',
  //             type: 'fa-file-pdf'
  //           },
  //           {
  //             title: '4. TERMINOS DE REFERENCIA INTEGRACION SISTEMA SCADA PTS WAR-SUR-ER',
  //             url: 'assets/doc/adquisiciones/13/4_TERMINOS_DE_REFERENCI_INTEGRACION_SISTEMA_SCADA_PTS_WAR-SUR-ER.pdf',
  //             type: 'fa-file-pdf'
  //           },
  //           {
  //             title: '5. IT008_Instructivo_Covid19_ENDE ANDINA',
  //             url: 'assets/doc/adquisiciones/13/5_IT008_Instructivo_Covid19_ENDE ANDINA.pdf',
  //             type: 'fa-file-pdf'
  //           },
  //           {
  //             title: '6. FORMULARIOS A-1 ... hasta ... A-9 y C-1 PROPUESTA TECNICA PTS WAR-SUR-ER',
  //             url: 'assets/doc/adquisiciones/13/6_FORMULARIOS_A-1...hasta...A-9_y_C-1_PROPUESTA_TECNICA_PTS_WAR-SUR-ER.docx',
  //             type: 'fa-file-word'
  //           },
  //           {
  //             title: '7.1. FORMULARIO B-1 PROPUESTA ECONOMICA PTWARNES',
  //             url: 'assets/doc/adquisiciones/13/7-1_FORMULARIO_B-1_PROPUESTA_ECONOMICA_PTWARNES.xlsx',
  //             type: 'fa-file-excel'
  //           },
  //           {
  //             title: '7.2. FORMULARIO B-1 PROPUESTA ECONOMICA PTSUR',
  //             url: 'assets/doc/adquisiciones/13/7-2_FORMULARIO_B-1_PROPUESTA_ECONOMICA_PTSUR.xlsx',
  //             type: 'fa-file-excel'
  //           },
  //           {
  //             title: '7.3. FORMULARIO B-1 PROPUESTA ECONOMICA PTER',
  //             url: 'assets/doc/adquisiciones/13/7-3_FORMULARIO_B-1_PROPUESTA_ECONOMICA_PTER.xlsx',
  //             type: 'fa-file-excel'
  //           }
  //         ]
  //   },
  //   {
  //     section : 'CONVOCATORIA  N° 20-06-0012',
  //     type: 'concluidas',
  //     title: 'RECARGA DE EXTINTORES PARA LA PLANTA TERMOELÉCTRICA WARNES',
  //     Inital: '',
  //     meeting: '',
  //     presentation: '30/07/2020 14:00',
  //     detail: '',
  //     docs: [{
  //             title: '1. INVITACIÓN PARA PROPUESTA RECARGA EXTINTORES PLANTA WARNES20-06-0012',
  //             url: 'assets/doc/adquisiciones/11/1_INVITACION_PARA_PROPUESTA_RECARGA_EXTINTORES_PLANTA_WARNES20-06-0012.pdf',
  //             type: 'fa-file-pdf',
  //           },
  //           {
  //             title: '2. TDR Recarga de Extintores Planta Warnes',
  //             url: 'assets/doc/adquisiciones/11/2_TDR_Recarga_de_Extintores_Planta_Warnes.pdf',
  //             type: 'fa-file-pdf'
  //           },
  //           {
  //             title: '3, Anexo I  recarga extintores Planta Warnes',
  //             url: 'assets/doc/adquisiciones/11/3_Anexo_I_recarga_extintores_Planta_Warnes.xlsx',
  //             type: 'fa-file-excel'
  //           },
  //           {
  //             title: '4. Anexo II recarga extintores Planta Warnes',
  //             url: 'assets/doc/adquisiciones/11/4_Anexo_II_recarga_extintores_Planta_Warnes.xlsx',
  //             type: 'fa-file-excel'
  //           }
  //         ]
  //   },
  //   {
  //     section : 'CONVOCATORIA  N° 20-06-0012',
  //     type: 'concluidas',
  //     title: 'RECARGA DE EXTINTORES PARA LA PLANTA TERMOELÉCTRICA WARNES',
  //     Inital: '',
  //     meeting: '',
  //     presentation: '30/07/2020 14:00',
  //     detail: '',
  //     docs: [{
  //             title: '1. INVITACIÓN PARA PROPUESTA RECARGA EXTINTORES PLANTA WARNES20-06-0012',
  //             url: 'assets/doc/adquisiciones/11/1_INVITACION_PARA_PROPUESTA_RECARGA_EXTINTORES_PLANTA_WARNES20-06-0012.pdf',
  //             type: 'fa-file-pdf',
  //           },
  //           {
  //             title: '2. TDR Recarga de Extintores Planta Warnes',
  //             url: 'assets/doc/adquisiciones/11/2_TDR_Recarga_de_Extintores_Planta_Warnes.pdf',
  //             type: 'fa-file-pdf'
  //           },
  //           {
  //             title: '3, Anexo I  recarga extintores Planta Warnes',
  //             url: 'assets/doc/adquisiciones/11/3_Anexo_I_recarga_extintores_Planta_Warnes.xlsx',
  //             type: 'fa-file-excel'
  //           },
  //           {
  //             title: '4. Anexo II recarga extintores Planta Warnes',
  //             url: 'assets/doc/adquisiciones/11/4_Anexo_II_recarga_extintores_Planta_Warnes.xlsx',
  //             type: 'fa-file-excel'
  //           }
  //         ]
  //   },
  //   {
  //     section : 'CONVOCATORIA  N° 20-06-0021',
  //     type: 'concluidas',
  //     title: 'RECARGA DE EXTINTORES PARA LA PLANTA TERMOELÉCTRICA ENTRE RÍOS',
  //     Inital: '',
  //     meeting: '',
  //     presentation: '30/07/2020 14:00',
  //     detail: '',
  //     docs: [{
  //             title: '1. INVITACION PARA PROPUESTA RECARGA EXTINTORES PLANTA ENTRE RIOS N° 20-06-0021',
  //             url: 'assets/doc/adquisiciones/10/1_INVITACION_PARA_PROPUESTA_RECARGA_EXTINTORES_PLANTA_ENTRE_RIOS_N 20-06-0021.pdf',
  //             type: 'fa-file-pdf',
  //           },
  //           {
  //             title: '2. TDR Recarga de Extintores PTER',
  //             url: 'assets/doc/adquisiciones/10/2_TDR_Recarga_de_Extintores_PTER.pdf',
  //             type: 'fa-file-pdf'
  //           },
  //           {
  //             title: '3. Anexo I  recarga extintores Entre Rios',
  //             url: 'assets/doc/adquisiciones/10/3_Anexo_I_recarga_extintores_Entre_Rios.xlsx',
  //             type: 'fa-file-excel'
  //           },
  //           {
  //             title: '4. Anexo II recarga extintores Entre Rios',
  //             url: 'assets/doc/adquisiciones/10/4_Anexo_II_recarga_extintores_Entre_Rios.xlsx',
  //             type: 'fa-file-excel'
  //           }
  //         ]
  //   },
  //   {
  //     section : 'CONVOCATORIA  N° 20-06-0022',
  //     type: 'concluidas',
  //     title: 'RECARGA DE EXTINTORES PARA LA PLANTA TERMOELÉCTRICA DEL SUR',
  //     Inital: '',
  //     meeting: '',
  //     presentation: '30/07/2020 14:00',
  //     detail: '',
  //     docs: [{
  //             title: '1. INVITACIÓN PARA PROPUESTA RECARGA EXTINTORES PLANTA DEL SUR N°20-06-0022',
  //             url: 'assets/doc/adquisiciones/9/1_INVITACION_PARA_PROPUESTA_RECARGA_EXTINTORES_PLANTA_DEL_SUR_N20-06-0022.pdf',
  //             type: 'fa-file-pdf',
  //           },
  //           {
  //             title: '2. TDR RECARGA DE EXTINTORES PLANTA DEL SUR',
  //             url: 'assets/doc/adquisiciones/9/2_TDR_RECARGA_DE_EXTINTORES_PLANTA_DEL_SUR.pdf',
  //             type: 'fa-file-pdf'
  //           },
  //           {
  //             title: '3. anexo I  recarga extintores Planta del Sur',
  //             url: 'assets/doc/adquisiciones/9/3_anexo_I_recarga_extintores_Planta_del_Sur.xlsx',
  //             type: 'fa-file-excel'
  //           },
  //           {
  //             title: '4. Anexo II recarga extintores Planta del Sur',
  //             url: 'assets/doc/adquisiciones/9/4_Anexo_II_recarga_extintores_Planta_del_Sur.xlsx',
  //             type: 'fa-file-excel'
  //           }
  //         ]
  //   },
  //   {
  //     section : 'CONVOCATORIA  N° 001/2020',
  //     type: 'concluidas',
  //     title: 'VENTA DE RESIDUOS INDUSTRIALES (ACEITE EN DESUSO)',
  //     Inital: '',
  //     meeting: '',
  //     presentation: '30/07/2020 11:00',
  //     detail: '',
  //     docs: [{
  //             title: 'CONVOCATORIA DE VENTA_DE ACEITE EN DESUSO',
  //             url: 'assets/doc/adquisiciones/8/CONVOCATORIA_DE_VENTA_DE_ACEITE_EN_DESUSO.pdf',
  //             type: 'fa-file-pdf',
  //           },
  //           {
  //             title: 'FORMULARIO DE PRESENTACION DE OFERTAS',
  //             url: 'assets/doc/adquisiciones/8/FORMULARIO_DE_PRESENTACION_DE_OFERTAS.xlsx',
  //             type: 'fa-file-excel'
  //           }
  //         ]
  //   },
  //   {
  //     section : 'CONVOCATORIA CGT.E N° 01/2020',
  //     type: 'concluidas',
  //     title: 'PERFORACIÓN Y CONSTRUCCIÓN DE 2 POZOS PROFUNDOS PARA PRODUCCIÓN DE AGUA – CICLOS COMBINADOS PLANTA TERMOELÉCTRICA WARNES',
  //     Inital: '',
  //     meeting: '',
  //     presentation: '27/07/2020 10:00',
  //     detail: '',
  //     docs: [{
  //             title: '01. Invitacion Pozos Profundos CTG.E No 01-2020',
  //             url: 'assets/doc/adquisiciones/7/01_Invitacion_Pozos_Profundos_CTG_E_No_01-2020.pdf',
  //             type: 'fa-file-pdf',
  //           },
  //           {
  //             title: '02 Balance de Agua',
  //             url: 'assets/doc/adquisiciones/7/02_Balance_de_Agua.pdf',
  //             type: 'fa-file-pdf'
  //           },
  //           {
  //             title: '04 RESUMEN EJECUTIVO',
  //             url: 'assets/doc/adquisiciones/7/04_RESUMEN_EJECUTIVO.pdf',
  //             type: 'fa-file-pdf'
  //           },
  //           {
  //             title: '05 ETG',
  //             url: 'assets/doc/adquisiciones/7/05_ETG.pdf',
  //             type: 'fa-file-pdf'
  //           },
  //           {
  //             title: '06  ETES',
  //             url: 'assets/doc/adquisiciones/7/06_ETES.pdf',
  //             type: 'fa-file-pdf'
  //           },
  //           {
  //             title: '07 TERMINOS DE REFERENCIA',
  //             url: 'assets/doc/adquisiciones/7/07_TERMINOS_DE_REFERENCIA.pdf',
  //             type: 'fa-file-pdf'
  //           },
  //           {
  //             title: '08. PLIEGO DE CONDICIONES POZOS PROFUNDOS',
  //             url: 'assets/doc/adquisiciones/7/08_PLIEGO_DE_CONDICIONES_POZOS_PROFUNDOS.pdf',
  //             type: 'fa-file-pdf'
  //           },
  //           {
  //             title: '09. FORMULARIOS POZOS PROFUNDOS PTWAR CTG.E No 01.2020',
  //             url: 'assets/doc/adquisiciones/7/09_FORMULARIOS_POZOS_PROFUNDOS_PTWARCTG_E_No_01-2020.docx',
  //             type: 'fa-file-word'
  //           }
  //         ]
  //   },
  //   {
  //     section : 'CONVOCATORIA  N° 008/2020',
  //     type: 'concluidas',
  //     title: 'PROGRAMA DE SEGUROS ENDE ANDINA S.A.M. 2020 - 2021',
  //     Inital: '20/06/2020',
  //     meeting: '',
  //     presentation: '30/07/2020 10:00',
  //     detail: '',
  //     docs: [{
  //             title: '1 INVITACION PROGRAMA DE SEGUROS ENDE ANDINA S.A.M.',
  //             url: 'assets/doc/adquisiciones/6/1_INVITACION_PROGRAMA_DE_SEGUROS_ENDE_ANDINA_SAM.pdf',
  //             type: 'fa-file-pdf',
  //           },
  //           {
  //             title: '2 PLIEGO DE CONDICIONES PROGRAMA DE SEGUROS ENDE ANDINA S.A.M. 2020 - 2021',
  //             url: 'assets/doc/adquisiciones/6/2_PLIEGO_DE_CONDICIONES_PROGRAMA_DE_SEGUROS_ENDE_ANDINA_SAM_2020-2021.pdf',
  //             type: 'fa-file-pdf'
  //           },
  //           {
  //             title: '3 FORMULARIOS PROGRAMA DE SEGUROS ENDE ANDINA S.A.M. 2020 - 2021',
  //             url: 'assets/doc/adquisiciones/6/3_FORMULARIOS_PROGRAMA_DE_SEGUROS_ENDE_ANDINA_SAM_2020-2021.docx',
  //             type: 'fa-file-word'
  //           },
  //           {
  //             title: 'ENMIENDA NRO. 1 PROGRAMA DE SEGUROS ENDE ANDINA S.A.M. GESTIÓN 2020-2021',
  //             url: 'assets/doc/adquisiciones/6/Enmienda_N_1_PROGRAMA_DE_SEGUROS_ENDE_ANDINA_GESTION_2020-2021.pdf',
  //             type: 'fa-file-pdf'
  //           },
  //           {
  //             title: 'ANEXO 1 - SLIPS DE COTIZACION DESPUES DE ENMIENDA 1 PROGRAMA DE SEGUROS ENDE ANDINA SAM 2020-2021',
  //             url: 'assets/doc/adquisiciones/6/ANEXO_1-SLIPS_DE_COTIZACION_DESPUES_DE_ENMIENDA_1_PROGRAMA_DE_SEGUROS_ENDE_ANDINA_SAM_2020-2021.docx',
  //             type: 'fa-file-word'
  //           },
  //           {
  //             title: 'ACTA DE REUNIÓN DE ACLARACIÓN DE PROGRAMA DE SEGUROS ENDE ANDINA S.A.M. GESTIÓN 2020-2021',
  //             url: 'assets/doc/adquisiciones/6/ACTA_DE_REUNION_DE_ACLARACION_DE_PROGRAMA_DE_SEGUROS_ENDE_ANDINA_SAM_GESTION_2020-2021.pdf',
  //             type: 'fa-file-pdf'
  //           }
  //         ]
  //   },
  //   {
  //     section : 'CONVOCATORIA  N° 0015/2020',
  //     type: 'concluidas',
  //     title: 'ADQUISICIÓN DE ROPA DE TRABAJO',
  //     Inital: '20/06/2020',
  //     meeting: '',
  //     presentation: '28/07/2020 16:00',
  //     detail: '',
  //     docs: [{
  //             title: '1. INVITACIÓN PROCESO ROPA DE TRABAJO Y BOTAS DE SEGURIDAD',
  //             url: 'assets/doc/adquisiciones/5/1_INVITACIÓN_PROCESO_ROPA_DE_TRABAJO_Y_BOTAS_DE_SEGURIDAD.pdf',
  //             type: 'fa-file-pdf',
  //           },
  //           {
  //             title: '2. ET Adquisicion Ropa de Trabajo y Botas de Seguridad 20-06-0015',
  //             url: 'assets/doc/adquisiciones/5/2_ET_Adquisicion_Ropa_de_Trabajo_y_Botas_de_Seguridad_20-06-0015.pdf',
  //             type: 'fa-file-pdf'
  //           },
  //           {
  //             title: '3. PLIEGO DE CONDICIONES ROPA DE TRABAJO',
  //             url: 'assets/doc/adquisiciones/5/3_PLIEGO_DE_CONDICIONES_ROPA_DE_TRABAJO.pdf',
  //             type: 'fa-file-pdf'
  //           },
  //           {
  //             title: '4. Formulario Anexo I  N° 20-06-0015',
  //             url: 'assets/doc/adquisiciones/5/4_Formulario_Anexo_I_N_20-06-0015.xlsx',
  //             type: 'fa-file-excel'
  //           },
  //           {
  //             title: '5. Formulario Anexo II Cod. 20-06-0015 ropa de trabajo',
  //             url: 'assets/doc/adquisiciones/5/5_Formulario_Anexo_II_Cod_20-06-0015_ropa_de_trabajo.xlsx',
  //             type: 'fa-file-excel'
  //           }
  //         ]
  //   },
  //   {
  //     section : 'CONVOCATORIA  N° 0016/2020',
  //     type: 'concluidas',
  //     title: 'ADQUISICIÓN DE EQUIPOS DE PROTECCIÓN PERSONAL',
  //     Inital: '20/06/2020',
  //     meeting: '',
  //     presentation: '28/07/2020 18:00',
  //     detail: '',
  //     docs: [{
  //             title: '1. INVITACION PROCESO EQUIPOS DE PROTECCION PERSONAL',
  //             url: 'assets/doc/adquisiciones/4/1_INVITACION_PROCESO_EQUIPOS_DE_PROTECCION_PERSONAL.pdf',
  //             type: 'fa-file-pdf',
  //           },
  //           {
  //             title: '2. ET Adquisicion de EPP 20-06-0016',
  //             url: 'assets/doc/adquisiciones/4/2_ET_Adquisicion_de_EPP_20-06-0016 .pdf',
  //             type: 'fa-file-pdf'
  //           },
  //           {
  //             title: '3. PLIEGO DE CONDICIONES PROCESO EQUIPOS DE SEGURIDAD PERSONAL',
  //             url: 'assets/doc/adquisiciones/4/3_PLIEGO_DE_CONDICIONES_PROCESO_EQUIPOS_DE_SEGURIDAD_PERSONAL.pdf',
  //             type: 'fa-file-pdf'
  //           },
  //           {
  //             title: '4. Formulario Anexo I  N° 20-06-0016',
  //             url: 'assets/doc/adquisiciones/4/4_Formulario_Anexo_I_N_20-06-0016.xlsx',
  //             type: 'fa-file-excel'
  //           },
  //           {
  //             title: '5.  Formulario Anexo II Cod. 20-06-0016 EPPs',
  //             url: 'assets/doc/adquisiciones/4/5_Formulario_Anexo_II_Cod_20-06-0016_EPPs.xlsx',
  //             type: 'fa-file-excel'
  //           },
  //           {
  //             title: 'Enmienda N° 1 ADQ. EPPs',
  //             url: 'assets/doc/adquisiciones/4/Enmienda_N_1_ADQ_EPPs.pdf',
  //             type: 'fa-file-pdf'
  //           },
  //           {
  //             title: 'ET despues de Enmienda Nro. 1 Adquisicion de EPP Gestion 2020',
  //             url: 'assets/doc/adquisiciones/4/ET_despues_de_Enmienda_Nro_1_Adquisicion_de_EPP_Gestion_2020.pdf',
  //             type: 'fa-file-pdf'
  //           },
  //           {
  //             title: 'Formulario Anexo II despues de ENMIENDA 1 Cod. 20-06-0016 EPPs',
  //             url: 'assets/doc/adquisiciones/4/Formulario_Anexo_II_despues_de_ENMIENDA_1_Cod_20-06-0016_EPPs.xlsx',
  //             type: 'fa-file-excel'
  //           }
  //         ]
  //   },
  //   {
  //     section : 'CONVOCATORIA  N° 0017/2020',
  //     type: 'concluidas',
  //     title: 'CONTRATACIÓN DE UN CONSULTOR MÉDICO LABORAL POR PLANTA (PTER, PTWARNES, PTSUR)',
  //     Inital: '20/06/2020',
  //     meeting: '22/07/2020',
  //     presentation: '22/07/2020 18:00',
  //     detail: '',
  //     docs: [{
  //             title: '1 INVITACION CONSULTOR INDIVIDUAL MEDICO LABORAL',
  //             url: 'assets/doc/adquisiciones/3/1_INVITACION_CONSULTOR_INDIVIDUAL_MEDICO_LABORAL.pdf',
  //             type: 'fa-file-pdf',
  //           },
  //           {
  //             title: '2 pliego de condiciones consultor individual medicos',
  //             url: 'assets/doc/adquisiciones/3/2_pliego_de_condiciones_consultor_individual_medicos.pdf',
  //             type: 'fa-file-pdf'
  //           },
  //           {
  //             title: '3 FORMULARIOS CONSULTA MEDICO LABORAL',
  //             url: 'assets/doc/adquisiciones/3/3_FORMULARIOS_CONSULT_MEDICO_LABORAL.docx',
  //             type: 'fa-file-word'
  //           }
  //         ]
  //   },
  //   {
  //     section : 'CONVOCATORIA  N° 007/2020',
  //     type: 'concluidas',
  //     title: 'REFUNCIONALIZACIÓN DE LAS OFICINAS DE ENDE ANDINA S.A.M. COCHABAMBA',
  //     Inital: '03/07/2020',
  //     meeting: '10/07/2020',
  //     presentation: '15/07/2020',
  //     detail: '',
  //     docs: [{
  //               title: 'COMUNICADO IMPORTANTE',
  //               url: 'assets/doc/adquisiciones/COMUNICADO_IMPORTANTE.docx',
  //               type: 'fa-file-word',
  //           },
  //           {
  //               title: 'INVITACION A PRESENTAR PROPUESTAS REFUNCIONALIZACION OF CBBA',
  //               url: 'assets/doc/adquisiciones/1_INVITACION_A_PRESENTAR_PROPUESTAS_REFUNCIONALIZACION_OF_CBBA.pdf',
  //               type: 'fa-file-pdf',
  //           },
  //           {
  //             title: 'PLIEGO DE CONDICIONES REFUNCIONALIZACION OFICINAS ENDE ANDINA',
  //             url: 'assets/doc/adquisiciones/2_PLIEGO_DE_CONDICIONES_REFUNCIONALIZACION_OFICINAS_ENDE_ANDINA.pdf',
  //             type: 'fa-file-pdf'
  //           },
  //           {
  //             title: 'FORMULARIOS REFUNCIONALIZACION OFICINAS ENDE ANDINA',
  //             url: 'assets/doc/adquisiciones/3_FORMULARIOS_REFUNCIONALIZACION_OFICINAS_ENDE_ANDINA.docx',
  //             type: 'fa-file-word'
  //           },
  //           {
  //             title: 'ESPECIFICACIONES TECNICAS REFUNCIONALIZACION OFICINAS ENDE ANDINA',
  //             url: 'assets/doc/adquisiciones/4_ESPECIFICACIONES_TECNICAS_REFUNCIONALIZACION_OFICINAS_ENDE_ANDINA.pdf',
  //             type: 'fa-file-pdf'
  //           },
  //           {
  //             title: 'TERMINOS DE REFERENCIA REFUNCIONALIZACION OFICINAS ENDE ANDINA',
  //             url: 'assets/doc/adquisiciones/5_TERMINOS_DE_REFERENCIA_REFUNCIONALIZACION_OFICINAS_ENDE_ANDINA.pdf',
  //             type: 'fa-file-pdf'
  //           },
  //           {
  //             title: 'LISTA DE ITEMS DEL PROCESO REFUNCIONALIZACION OFICINAS ENDE ANDINA',
  //             url: 'assets/doc/adquisiciones/6_LISTA_DE_ITEMS_DEL_PROCESO_REFUNCIONALIZACION_OFICINAS_ENDE_ANDINA.xlsx',
  //             type: 'fa-file-excel'
  //           },
  //           {
  //             title: 'PLANOS REFORMULACION',
  //             url: 'assets/doc/adquisiciones/7_PLANOS_REFORMULACION.rar',
  //             type: 'fa-file-file'
  //           },
  //           {
  //             title: 'Acta Reunion de Aclaracion REFUNCIONALIZACION',
  //             url: 'assets/doc/adquisiciones/Acta_Reunion_de_Aclaracion_REFUNCIONALIZACION.pdf',
  //             type: 'fa-file-pdf'
  //           },
  //           {
  //             title: 'ENMIENDA N°1 REFUNCIONALIZACION',
  //             url: 'assets/doc/adquisiciones/ENMIENDA_N1_REFUNCIONALIZACION.pdf',
  //             type: 'fa-file-pdf'
  //           }


  //         ]
  //   },
  //   {
  //     section : 'SEGUNDA CONVOCATORIA  N° 006/2020',
  //     type: 'concluidas',
  //     title: 'Perforación y Construcción de  2 pozos profundos para producción de agua – Ciclos combinados Planta Termoeléctrica Warnes.',
  //     Inital: '10/06/2020',
  //     meeting: '10/06/2020',
  //     presentation: '10/06/2020',
  //     detail: '',
  //     docs: [{
  //               title: 'TERMINOS DE REFERENCIA 2da CONVOCATORIA POZOS PROFUNDOS WARNES',
  //               url: 'assets/doc/adquisiciones/TERMINOS_DE_REFERENCIA_2da_CONVOCATORIA_POZOS+PROFUNDOS_WARNES.pdf',
  //               type: 'fa-file-pdf',
  //           },
  //           {
  //             title: 'PLIEGO DE CONDICIONES POZOS PROFUNDOS PTWAR (2da CONVOCATORIA)',
  //             url: 'assets/doc/adquisiciones/PLIEGO_DE_CONDICIONES_POZOS_PROFUNDOS_PTWAR_(2da_CONVOCATORIA).pdf',
  //             type: 'fa-file-pdf'
  //           },
  //           {
  //             title: 'Invitacion 006-2020 Pozos Profundos (2da Convocatoria)',
  //             url: 'assets/doc/adquisiciones/Invitacion_006-2020_Pozos_Profundos_(2da Convocatoria).pdf',
  //             type: 'fa-file-pdf'
  //           },
  //           {
  //             title: 'PLANOS PERFORACION Y CONSTRUCCIÓN DE 2 POZOS PROFUNDOS',
  //             url: 'assets/doc/adquisiciones/PLANOS_PERFORACION_Y_CONSTRUCCIÓN_DE_2 POZOS_PROFUNDOS.pdf',
  //             type: 'fa-file-pdf'
  //           },
  //           {
  //             title: 'FORMULARIOS PROCESO CONSTRUCCION POZOS PROFUNDOS',
  //             url: 'assets/doc/adquisiciones/FORMULARIOS_PROCESO_CONSTRUCCION_POZOS_PROFUNDOS.docx',
  //             type: 'fa-file-word'
  //           },
  //           {
  //             title: 'ESPECIFICACIONES TECNICAS GENERALES PERFORACION Y CONSTRUCCIÓN DE 2 POZOS PROFUNDOS',
  //             url: 'assets/doc/adquisiciones/ESPECIFICACIONES_TECNICAS_GENERALES PERFORACION_Y_CONSTRUCCIÓN_DE_2_POZOS_PROFUNDOS.pdf',
  //             type: 'fa-file-pdf'
  //           },
  //           {
  //             title: 'ESPECIFICACIONES TECNICAS ESPECIALES PERFORACION Y CONSTRUCCIÓN DE 2 POZOS PROFUNDOS',
  //             url: 'assets/doc/adquisiciones/ESPECIFICACIONES_TECNICAS_ESPECIALES_PERFORACION_Y_CONSTRUCCIÓN_DE_2_POZOS_PROFUNDOS.pdf',
  //             type: 'fa-file-pdf'
  //           }


  //         ]
  //   }
  // ];

  newData: any;

  // constructor( private http: HttpClient ) {

    // this.newData = this.getDocuments('vigentes');
    // console.log(this.newData);
  //  }


  

  // getDocuments( to: number = 0 ) {
  //   const url = this.uri + '/doc/web';
  //   console.log('ruta', url);
  //   return this.http.get<IDocs>( url ).pipe(
  //       map( results => {
  //         console.log('resultado ', results);
  //         this.total = results.total;
  //       //   results.documents.sort((a, b) => {
  //       //     return a.fecha_invitacion > b.fecha_invitacion ? -1 : 1;
  //       //  });
  //         return results.docs;
  //       })
  //   );
  // }

  getConvocatories() {
    const url = this.uri + '/convocatory/web';
    console.log('ruta', url);
    return this.http.get<IConvocatories>( url ).pipe(
        map( results => {
          // console.log('resultado ', results);
          this.total = results.total;
        //   results.documents.sort((a, b) => {
        //     return a.fecha_invitacion > b.fecha_invitacion ? -1 : 1;
        //  });
          return results.convocatories;
        })
    );
  }

  downloadFile(fileName: string) {
    const url = this.uri + '/file/docs/' + fileName;
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/pdf');
    return this.http.get(url, { headers: headers, responseType: 'blob' });
  }

}
