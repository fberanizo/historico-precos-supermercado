import React, { Component } from 'react';
import Drawer, { DrawerContent } from '@material/react-drawer';
import List, { ListItemText, ListItem } from '@material/react-list';

import './NavDrawer.scss';

class NavDrawer extends Component {
  render() {
    return (
      <Drawer dismissible={this.props.dismissible} open={this.props.open}>
        <DrawerContent>
          <List tag='nav' singleSelection selectedIndex={this.props.selectedIndex}>
            <ListItem onClick={this.props.onListItemClick} data-regex='(ACHOC PO ITALAC SCH 400G|ACHOC PO TODDY 400G|ACHOC TODDY 400G|TODDY TRAD.400g)'><ListItemText primaryText='Achocolatado' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(ACUC.PURINHA 5KG|ACUCAR CRISTAL CARAVELAS 5KG)'><ListItemText primaryText='Açúcar Cristal 5kg' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(ACUCAR BIG BOM EXTRA|ACUCAR REF CARAVELAS 1KG|ACUCAR REF.CARAVELAS)'><ListItemText primaryText='Açúcar Refinado 1kg' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(ADOC LIQ ZERO CAL 100ML|ADOC.ZERO-CAL 100ML|ADOCANTE ZERO CAL LI)'><ListItemText primaryText='Adoçante' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(AGUA SANIT SUPREMA 1L|AGUA SANIT SUPREMA 2L|AGUA SANITARIA VAREK)'><ListItemText primaryText='Água Sanitária' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(AMAC FLEUR D YPE ACONCHEGO AZUL 2L|AMAC FLOR YPE LV 2L|AMAC.PLUSH 2L|AMAC.YPE AZUL PROMO|AMACIANTE YPE 2L)'><ListItemText primaryText='Amaciante' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(AP BARB PRESTOBARBA U GRIP 3 2UN|AP SUPER SHAVE 2UN|AP SUPER SHAVE 3 BAR)'><ListItemText primaryText='Aparelho de barbear' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(APRESUNTADO FAT SADIA KG|APRESUNTADO PEPERI F)'><ListItemText primaryText='Apresuntado' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(ARROZ PAN FERRO 5K P|ARROZ PARB.B.LEGAL|ARROZ PARB.RAROZ|ARROZ PARBOILIZADO CAMIL 5KG|ARROZ PARBOLIZADO BLUE VILLE 5KG|SOBRADINHO 5K PARBOI)'><ListItemText primaryText='Arroz 5kg' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(ATUM COQUEIRO NAT 17)'><ListItemText primaryText='Atum' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(AVEIA FLOCOS N.LIFE|AVEIA SANJER 250G FL|AVEIA YOKI FLOCOS 500G|AVEIA YOKI FLOCOS FINOS 500G)'><ListItemText primaryText='Aveia' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(AZ.OLIV.CONDE 500ML|AZEITE COCINERO 500M|AZEITE EX VIRGEM FAMIGLIA DORO VD 500ML|AZEITE EX VIRGEM LA ESPANOLA VD 500ML)'><ListItemText primaryText='Azeite' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(AZEITONA DIZA SACHE|AZEITONA VDE FAT CAMPO BELO SCH 150G|AZEIT.FAT.DIZA 100g)'><ListItemText primaryText='Azeitona' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(BACALHAU LING 8 10)'><ListItemText primaryText='Bacalhau' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(BACON MANTA SADIA KG|BACON SANTA ROSA PED)'><ListItemText primaryText='Bacon' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(BECEL 250G|BECEL 500G|CR VEGETAL PRIME 500|CR.VEG.BECEL 500G|CREME VEGETAL CSAL TRAD BECEL 500G|MARG CLAYBOM 500G)'><ListItemText primaryText='Margarina' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(BISC AGUA E SAL TRIUNFO 375G|BISC.A.SAL ZABET 400)'><ListItemText primaryText='Bolacha Água e Sal' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(BISC.RENATA LAM.360G|BISCOITO ZABET 400G|BISCOITO ZABET MANTE)'><ListItemText primaryText='Bolacha Maizena' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(BOMBOM LACTA 289.2G|BOMBOM NESTLE 300G E|BOMBOM NESTLE ESPECIALIDADES 300G)'><ListItemText primaryText='Caixa de Bombons' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(C SECA PAINEIRA 500G)'><ListItemText primaryText='Carne Seca' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(CAFE 3 COR.500g|CAFE 3 COR.PROMO|CAFE 3 CORACOES TRAD|CAFE ALMOF EXTRA FORTE BRASILEIRO 500G|CAFE BIGBOM 500G|CAFE VACUO EX FORTE MANHA 500G)'><ListItemText primaryText='Café 500g' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(CAFE 3 COR.SACHET|CAFE 3 CORACOES SOLU|CAFE SOL.PACAEMBU|CAFE SOLUVEL PELE SCH 50G|MELITTA SOLUVEL 50G)'><ListItemText primaryText='Café Solúvel' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(CALDO KNORR 114GR|CALDO KNORR GALINHA|CALDO KNORR LV12PG10|CALDO MAGGI 152G)'><ListItemText primaryText='Caldo Knorr' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(CONTRA FILE KG|CARNE BOVINA CONTRA FILET EM BIFES)'><ListItemText primaryText='Contra-Filé' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(CHOC.HERSHEY S 110g|CHOC.HERSHEY S 92G)'><ListItemText primaryText='Chocolate em Barra' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(COCO FLOCOS MENINA10|COCO PREFERIDA 100g|COCO RALADO MENINA 1)'><ListItemText primaryText='Coco Ralado' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(COLGATE MAXIMA PROTE|CR DENT COLGATE TOTA|CR DENT COLGATE TOTAL12 MINT 90G|CR.COLG.PROF.140G|CR.COLG.TOTAL WHITEN|KIT COLGATE TOTAL 2)'><ListItemText primaryText='Pasta de Dentes' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(CR DE LEITE ITALAC TP 200G|CR LEITE SHEFA TP 20|CR.LEITE JUSSARA TP|CR.LEITE SHEFA 200g|CREME LEITE JUSSARA)'><ListItemText primaryText='Creme de Leite' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(CURIMBA INT. kg|CURIMBA KG)'><ListItemText primaryText='Curimba' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(CX MOLE KG)'><ListItemText primaryText='Coxão Mole' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(DES AERO REXONA WOMA|DES CR REXONA AP 48G|DESOD AERO MONANGE HID INTENSIVA 90G)'><ListItemText primaryText='Desodorante Feminino' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(DES SPRAY ZOG 90ML|DESOD AERO SUAVE SPORTFRESH 87G)'><ListItemText primaryText='Desodorante Masculino' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(DESINF DETAX 2L|DESINF SANOL 2L LAV|DESINF SANOL LAVANDA 2L|DESINF URCA LAVANDA 2L|DESINF.SANOL FLOR.2L|DESINFETANTE BAK YPE|PINHO CANDURA VIOLET)'><ListItemText primaryText='Desinfetante 2L' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(DET.LIQ.MINUANO LIM.|DET.LIQ.MINUANO MACA|DET.LIQ.MINUANO MAR.|DET.LIQ.YPE PACK|DETERG LIQ SUPREMA FR VERMELHAS 500ML|DETERG LIQ SUPREMA LIMAO 500ML|DETERG LIQ SUPREMA NEUTRO 500ML|L LOUCA TRIEX 500ML)'><ListItemText primaryText='Detergente' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(ENXAG.DENTICS PROM.)'><ListItemText primaryText='Enxaguante Bucal' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(ERV.FUGINI SACHET|ERVILHA FUGINI 200G|ERVILHA FUGINI SCH 200G|ERVILHA QUERO MENOS SODIO 200G)'><ListItemText primaryText='Ervilha 200g' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(ESC DENT J J REACH ULTRA CLEAN GRANDE|ESC DENT J J TEK|ESC.REACH.U.CLEAN MD)'><ListItemText primaryText='Escova de Dentes' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(ESP.M.U.ESFREBOM C4|ESPONJA 3M TININDO L|ESPONJA ACO Q LUSTRO|ESPONJA M U SELECT 4UN)'><ListItemText primaryText='Esponja' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(ESPUMA CERESER 660ML|ESPUMANT CERESER 660)'><ListItemText primaryText='Espumante' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(EXT TOM ELEFANTE 340G|EXT.TOM.LAT.ELE.340g|EXTRATO ELEFANTE 340)'><ListItemText primaryText='Extrato de Tomate' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(FAR.MILHO DEUSA 500G|FARINHA MILHO AMARELA YOKI 500G|FARINHA S ANTONIO MI)'><ListItemText primaryText='Farinha de Milho' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(FAR.TRIGO T.OFELIA 1|FARINHA CLARICE 1KG|FARINHA DE TRIGO LILI 1KG|FARINHA DE TRIGO SANTA CLARA 1KG|FARINHA TRIGO BIG BO)'><ListItemText primaryText='Farinha de Trigo' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(FAROFA MAND HIKARI 5|FAROFA MONJOLINHO|FAROFA PRONTA MAND YOKI 500G|FAROFA YOKI 500G)'><ListItemText primaryText='Farofa' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(FEIJAO CAIPIRA 1KG C|FEIJAO CARIOCA DA CASA TP 1 1KG|FEIJAO CREMOSO 1KG C|FEIJAO CREMOSO 2KG C|FEIJAO G.CAMPO 1KG)'><ListItemText primaryText='Feijão' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(FERM FLEISCHMANN 4UN|FERMENTO BIOL D BENTA SECO INST 10G)'><ListItemText primaryText='Fermento Biológico' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(FERM.PO D.BENTA 100g|FERMENTO PO OETKER 100G)'><ListItemText primaryText='Fermento em Pó' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(FL.AL.WYDA 30CM|FOLHA ALUMINIO WYDA)'><ListItemText primaryText='Folha de Papel Alumínio' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(FUBA HIKARI 500G MIM|FUBA KODILAR 500G|FUBA YOKI 1KG|FUBA YOKI 500G)'><ListItemText primaryText='Fubá' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(GEL.OETKER LIMAO|GELAT.OETKER MORANGO|GELAT.OETKER UVA|PO GELATINA D OETKER|PO GELATINA OETKER 2)'><ListItemText primaryText='Gelatina' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(HIDRAT DAVENE LEITE|LEITE H.PAIXAO 200ML)'><ListItemText primaryText='Hidratante de Pele' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(INSET AERO UFA MULTI L400ML P300ML|INSET SBP 45 NOITES|INSET SBP AERO 380ML)'><ListItemText primaryText='Inseticida' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(IOG DANONE ACTIVIA 1|BEBIDA LACTEA MORANGO PAULISTA 850G|LEITE FERM AMEIXA 0% ACTIVIA 1250G)'><ListItemText primaryText='Iogurte' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(ASSOLAN 8UN 60G|LA ACO ASSOLAN 60g|LA ACO ASSOLAN 8UN|LA ACO ASSOLAN PROMO)'><ListItemText primaryText='Lã de Aço' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(LEITE COCO MENINA 20ALEITE COCO TRAD.200M)'><ListItemText primaryText='Leite de Coco' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(LEITE COND ITALAC TP 395G|LEITE CONDENS FRIMES|LEITE CONDENS JUSSAR)'><ListItemText primaryText='Leite Condensado' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(LEITE DESN.JUSSARA|LEITE DESNATADO NILZA 1LT|LEITE L VIDA BLINK 1|LEITE L VIDA MATILA|LEITE L VIDA TIROL 1|LEITE LONGA VIDA DESN ITALAC CT 1L|LEITE LONGA VIDA DESNAT PIRACANJUBA 1L|LEITE SHEFA)'><ListItemText primaryText='Leite' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(LEITE PO INT ITALAC SCH 400G|LEITE PO ITALAC PC 4|LEITE PO ITAMBE SACH|LEITE PO PCT.200g|LEITE PO SACH ITAMBE)'><ListItemText primaryText='Leite em Pó' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(LIMP UAU LAVANDA 1L|LIMP UAU M USO 10 G|LIMP UAU MULTI USO LAVANDA 500ML|LIMP.M.USO.UAU LAV|LIMP.UAU LAVANDA|UAU LIMPEZA PERF 500)'><ListItemText primaryText='Limpador UAU' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(LIMP YPE M USO CLASSICO 500ML GTS 50ML|LUSTRA M.YPE JASMIM|LUSTRA MOVEIS YPE 20)'><ListItemText primaryText='Lustra-Móveis' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(LING MARCHIORI FRANG|LING NOBRE SUINA MIS)'><ListItemText primaryText='Linguiça Crua' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(LING SEARA CALABRESA|LING.CAL.PERDIGAO KG|LINGUICA CALABRESA SADIA KG|CALABRESA PERDIGAO D)'><ListItemText primaryText='Linguiça Calabresa' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(MAC SEMOLA DAROZ ESPAGUETTI 2 500G|MAC SEMOLADO VITARELLA ESPAGUETE 500G)'><ListItemText primaryText='Macarrão Espaguetti' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(MAC SEMOLA GALO PARAFUSO 2 500G|MAC SEMOLADO BASILAR|MAC.SEM.GALO 500G|MAC.SEMOL.BASILAR|MACARRAO BASILAR SEM)'><ListItemText primaryText='Macarrão Parafuso' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(MAIONESE SUAVIT 500G)'><ListItemText primaryText='Maionese' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(FILE DE MERLUZA CONG JESSY SEAFOODS 1KG|FILE MERLUZA KG|FILE PESCADA CONG COSTA SUL 500G|MERLUZA HG CONG.KG)'><ListItemText primaryText='Merluza' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(MILHO FUGINI 200G SA|MILHO FUGINI SACHET|MILHO VERDE STELA DORO 200G)'><ListItemText primaryText='Milho' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(MOLHO TOM TRAD PRIMOR SACHE 340G|MOLHO TRAD.PRED.340g|MOLHO VAL SACHE 340G)'><ListItemText primaryText='Molho de Tomate' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(OLEO COCAMAR PET 900|OLEO LEVE PET 900ML|OLEO SOJA CONCORDIA 900ML|OLEO SOJA SOYA 900ML|OLEO SOJA SUAVIT|OLEO SOJA V.VELHA)'><ListItemText primaryText='Óleo de Soja' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(PANETTONE FRUTAS NO PONTO KG|PANETTONE G.B.1KG)'><ListItemText primaryText='Panetone' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(PAO F.VISCONTI 400G|PAO F.WICK.INT.450G|PAO FORMA INTEGRAL VISCONTI 400G|PAO FORMA INTEGRAL WICKBOLD 550G|PAO NEWBREAD 500G 10|PAO NEWBREAD 500G IN|PAO NEWBREAD FORMA|PAO W BOLD 400G QUAD|PAO WICK BOLD 550G I)'><ListItemText primaryText='Pão de Forma' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(P HIG SUBLIME C 8UN|PAP.H.NEVE L12 P11|PAPEL HIG NEVE LV12|PAPEL HIG NEVE LV16|PAPEL HIG PERSONAL FS 4UN 30M)'><ListItemText primaryText='Papel Higiênico' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(P HIG SUBLIME C 8UN|PAP.H.NEVE L12 P11|PAPEL HIG NEVE LV12|PAPEL HIG NEVE LV16|PAPEL HIG PERSONAL FS 4UN 30M)'><ListItemText primaryText='Pipoca' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(PRESUN FRIMESA PC|PRESUNTO FRIMESA S C)'><ListItemText primaryText='Presunto' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(QJO FUGINI 40G RALAD|QJO.RAL.VIGOR 50GR|QJO ITALAC 50G RALAD|QUEIJO PARMESAO RALADO ITALAC 50G|QUEIJO RALADO FIAPO TEIXEIRA 50G|QUEIJO RALADO TRAD TEIXEIRA 50G)'><ListItemText primaryText='Queijo Ralado' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(QJO MUSSARELA FAT|QUEIJO MUSSARELA FAT TRES MARIAS KG)'><ListItemText primaryText='Queijo Muçarela' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(REFRIG COCA COLA PET 2000ML TRAD + 250ML GTS|REFRIG FANTA PET 2000ML UVA)'><ListItemText primaryText='Refrigerante' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(REQ SANTIAGO 220G|REQ.NESTLE LIGHT|REQ.VIGOR 200GR|REQUEIJAO TRAD SCALA 200G|REQUEIJAO TRAD TIROLEZ 200G|REQUEIJAO VIGOR COP)'><ListItemText primaryText='Requeijão' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(SAB FRANCIS SUAVE 85|SAB JOHNSON LAVANDA 80G|SAB JOHNSON LAVANDA E ALECRIM 90G|SAB JOHNSON OLEO AMEND 90G|SAB JOHNSONS 90GR|SAB NIVEA ANTIBACTER|SAB NIVEA HIDRATANTE|SAB PALMOLIVE SUAVE HID PERF ROSAS 85G|SAB PALMOLIVE SUAVE OLEO NUT CAMELIA 85G|SAB PROTEX COMPLETE 12 85G|SAB.ALBANY SVE.90GR|SAB.FRANCIS SVE.85G|SAB.PALM.85G|SABON.PALM.85G|SABON.PALM.ARGAN 85G|SABON.YPE BCO.90g|SABON.YPE ROSA 90g|SABON.YPE SVE.AMAR|SABONETE LIVY 90G|SABONETE NIVEA 85G)'><ListItemText primaryText='Sabonete' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(SABAO PED YPE 5X200G|SABAO PEDRA TRIEX 5U)'><ListItemText primaryText='Sabão em Pedra' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(DET.PO TIXAN 1KG|DET.PO TIXAN 2KG|L ROUPA PO SURF 1 KG|L ROUPA PO SURF 1KG|LAVA ROUPA PO SURF HORTENCIA E F BCA 1KGALAVA ROUPA PO TIXAN PRIMAVERA 1KGALAVA ROUPA PO TIXAN PRIMAVERA 2KG)'><ListItemText primaryText='Sabão em Pó' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(SACO FREEZER WYDA 2K)'><ListItemText primaryText='Saco Plástico' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(SAPOLIO RADIUM 300G)'><ListItemText primaryText='Sapólio' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(SARD.COQUEIRO 125G|SARDINHA EVISC CONG COSTA SUL 800G)'><ListItemText primaryText='Sardinha' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(SAZON 60GR|TEMP.SAZON MAR.60G|TEMP.SAZON VERM.60G|TEMPARISCO PO 50g)'><ListItemText primaryText='Sazon' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(SH SEDA LISO PERFEITO 325ML|SH SUAVE 325ML|SH.SUAVE 325ML|SHAMPOO F VEGETAIS)'><ListItemText primaryText='Shampoo' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(SOJA SANJER GRAOS 50)'><ListItemText primaryText='Soja' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(SUCO CAJU 1 LT|SUCO MARACUJA 1 LT|SUCO FR.CITRICAS 1 L|SUCO PESSEGO 1L)'><ListItemText primaryText='Suco 1L' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(REFRESCO DEL VALLE FRESH LARANJA 1.5L|REFRESCO DEL VALLE FRESH LIMAO 1.5L|BEB DEL VALLE FRESH)'><ListItemText primaryText='Suco 1,5L' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(SUCO GARIBALDI 1 5L|SUCO INTEGRAL UVA SALTON 1.5L|SUCO PANIZZON 1 5L|SUCO PANIZZON 1.5L|SUCO UVA 1.5 LTS)'><ListItemText primaryText='Suco de Uva' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(TEMP COMPLETO SABOR AMI 300G|TEMP.CPIM.AR.300g|TEMPERO HIKARI COMPL)'><ListItemText primaryText='Tempero Completo' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(TOALHA PAPEL SELECT 2UN|TOALHA PAPEL YURI 2|TOALHA YURI FIT C2)'><ListItemText primaryText='Toalha Papel' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(TRIGO KIBE SANJER 50)'><ListItemText primaryText='Trigo para Quibe' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(VASSOURA TOBIAS PRIM)'><ListItemText primaryText='Vassoura' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(VINAG.BELMONT ALCOOL|VINAG.BELMONT MACA|VINAGRE ALCOOL NEVAL 750ML|VINAGRE CASTELO 750M|VINAGRE FORTALEZA 75)'><ListItemText primaryText='Vinagre' /></ListItem>
            <ListItem onClick={this.props.onListItemClick} data-regex='(VINHO C.GARCIA 750ML|VINHO CASAL GARCIA V)'><ListItemText primaryText='Vinho' /></ListItem>
          </List>
        </DrawerContent>
      </Drawer>
    );
  }
}

export default NavDrawer;
