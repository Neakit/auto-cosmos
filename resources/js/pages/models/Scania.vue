<template>
    <div class="container py-4">
		<div>
			<h1>Карданные валы для Скании</h1>
			<p>Компания Авто-Космос представляет карданные валы для Скании из европейских комплектующих - производства diesel-auto.<br>
			Карданные валы на грузовики Скания имеет свою конструкцию. Сделано это скорее всего потому, что производитель хочет, чтобы покупали как можно больше оригинальные з/ч.<br>
			Карданные валы скания делятся на 3 типа (3 вида крепления крестовины):
			</p>
			<ul>
				<li>1 тип - (в основном авто с колесной формулой 4*2 и 6*2) крестовина "с бугелем" диаметр чашки 38  мм / 48  мм / 57  мм /  - рис. <a href="/images/val_scania/_01.jpg" data-lightbox="gallery1">1</a>, <a href="/images/val_scania/_02.jpg" data-lightbox="gallery1">2</a>, <a href="/images/val_scania/_03.jpg" data-lightbox="gallery1">3</a>, <a href="/images/val_scania/_04.jpg" data-lightbox="gallery1">4</a>;</li>
				<li>2 тип - (в основном авто с колёсной формулой 6*4 и 8*4 и т.д) крестовина 65  мм - 190  мм - рис. <a href="/images/val_scania/_05.jpg" data-lightbox="gallery1">5</a> и <a href="/images/val_scania/_06.jpg" data-lightbox="gallery1">6</a>;</li>
				<li>3 тип - с круглым фланцем (у Скании фланец "свой" диаметр окружности 208 мм от других грузовиков не подходит) с этим фланцем крестовна будет 65  мм (других нет) - рис. <a href="/images/val_scania/_07.jpg" data-lightbox="gallery1">7</a>, <a href="/images/val_scania/_08.jpg" data-lightbox="gallery1">8</a>, <a href="/images/val_scania/_09.jpg" data-lightbox="gallery1">9</a>, <a href="/images/val_scania/_10.jpg" data-lightbox="gallery1">10</a>.</li>
			</ul>

			<p>Круглый фланец идет только на крестовине 65  мм. Данный тип кардана с круглым фланцем ставится только на "тяжелые" авто колесной формулой 6*4 8*4 и т.д</p>
			<p><a href="/images/val_scania/_11.jpg" data-lightbox="gallery1">Схема как правильно мерить крестовину</a></p>
						
			<p>Крестовины на Сканию идут только с размерами ниже (других нет):<br>
			65-190 - каталожный номер 1879541 / 1541072 / 386073  / (под круглый фланец или под бугель одинаковая)<br>
			57-164  каталожный номер 1797425 / 2397362 / 366443 / 1765830 / 1879540 / 1750308 / 1541071 / 1766467 / 390225<br>
			обычный тягач 4*2 скорее всего будет на этой крестовине<br>
			48-161 - каталожный номер - 337059 / 1879538 / 1797424 / 2397361 / 1104452 / 2388680<br>
			38-148 - каталожный номер - 1765828 / 1879537 / 337058 / под бугель</p>
						
			Так же Скания устанавливает "свой" подвесной - он так же, как и крестовина, не подходит от других марок.<br>
			Диаметр обоймы - 60  мм - рис. <a href="/images/val_scania/_12.jpg" data-lightbox="gallery1">12</a>.<br>
			Номера подвесных:<br>
			- подшипник подвесной - 60 мм - 1387764.<br>
			- подшипник подвесной - 60 мм - 1113031.<br>
			В принципе эти подвесные  - взаимозаменяемые между собой.
						
			<h2>Основные неисправности</h2>
			<p>Необходимо следить за состоянием крестовины карданного вала. При его поломке ломает вилку на валу кардана и ответный фланец. На "тяжелых" авто с колёсной формулой 6*4 8*4 и т.д. Там, где стоит подвесной подшипник очень часто от больших нагрузок начинает "гулять" фланец, который стягивает подвесной подшипник на шлицевой втулке рис. <a href="/images/val_scania/_13.jpg" data-lightbox="gallery1">13</a> и <a href="/images/val_scania/_14.jpg" data-lightbox="gallery1">14</a>.<br>
			В этом случае если заменить только фланец неисправность не пройдет, нужно менять шлицевую втулку, которая у нас представлено отдельно + подвесной + фланец, который ее стягивает - эти запчасти у нас представлены отдельно: <a href="/images/val_scania/_14.jpg">шлицевая втулка</a> каталожный номер 1424698 \ 1387763.
			фланец - <a href="/images/val_scania/_15.jpg" data-lightbox="gallery1">15</a> и <a href="/images/val_scania/_16.jpg" data-lightbox="gallery1">16</a>, фланец - <a href="/images/val_scania/_17.jpg" data-lightbox="gallery1">17</a>.</p>


			<p>Так же часто при поиске кардана б/у на разборках, существует проблема правильного определения длины вала. Связанно это с тем, что оригинальная программа для подбора з/ч Скания указывает только номер карданного вала и длину по сварным швам, а размер длины по сварным швам - ничего не дает т.к. это не совсем верная длина (кардан может быть с подвесным или без него, с круглым фланцем или под бугель). Для продления ресурса карданного вала необходимо следить за состоянием крестовин, подвесного подшипника, шлицевого соединения. Для правильной их работы нужно вовремя смазывать, при необходимости - заменить.<br>

			</p>
			<h2>Оригинальные номера ходовых карданов Скания</h2>
		</div>

		<div class="row my-3">
			<div class="col-12" v-for="(product, index) in filtered" :key="index">
				<ProductCardPlain :card="product" />
			</div>
		</div>
	</div>
</template>


<script>
import ProductCardPlain from '../../components/ProductCardPlain'; 
import { mapGetters } from 'vuex';

	export default {
		components: {
			ProductCardPlain
		},
		data() {
			return {
				// products: []
			}
		},
		computed: {
			...mapGetters('product', ['products']),
			filtered(){
				return this.products && this.products.data && this.products.data.filter(i => i.product_model_id === 3) || [];
			}  
		}	
	}
</script>