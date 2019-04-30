var EngineJS = EngineJS || {};

(function (library) {
	"use strict";

	library.Events = function () {

	}
	/**
	 * Adiciona um evento de click
	 * @param {function} fn funcao a ser executada pelo evento
	 */
	library.Events.prototype.setActionsClick = function (fn) {
		if (typeof fn !== "undefined" && typeof fn === "function") {
			this._element.addEventListener("click", fn);
		} else {
			throw ("paremtro incorreto esperado tipo function e foi encontrado " + typeof fn);
		}
	}
	/**
	 * Adiciona um evento de doubleClick
	 * @param {function} fn funcao a ser executada pelo evento
	 */
	library.Events.prototype.setActionsDblClick = function (fn) {
		if (typeof fn !== "undefined" && typeof fn === "function") {
			this._element.addEventListener("dblclick", fn);
		} else {
			throw ("paremtro incorreto esperado tipo function e foi encontrado " + typeof fn);
		}
	}
	/**
	 * Adiciona um evento de mouseover
	 * @param {function} fn funcao a ser executada pelo evento
	 */
	library.Events.prototype.setActionsMouseOver = function (fn) {
		if (typeof fn !== "undefined" && typeof fn === "function") {
			this._element.addEventListener("mouseover", fn);
		} else {
			throw ("paremtro incorreto esperado tipo function e foi encontrado " + typeof fn);
		}
	}
	/**
	 * Adiciona um evento de mouseout
	 * @param {function} fn funcão a ser executada pelo evento
	 */
	library.Events.prototype.setActionsMouseOut = function (fn) {
		if (typeof fn !== "undefined" && typeof fn === "function") {
			this._element.addEventListener("mouseout", fn);
		} else {
			throw ("paremtro incorreto esperado tipo function e foi encontrado " + typeof fn);
		}
	}
	/**
	 * Adiciona um evento de mousenter
	 * @param {function} fn funcão a ser executada pelo evento
	 */
	library.Events.prototype.setActionsMouseEnter = function (fn) {
		if (typeof fn !== "undefined" && typeof fn === "function") {
			this._element.addEventListener("mouseenter", fn);
		} else {
			throw ("paremtro incorreto esperado tipo function e foi encontrado " + typeof fn);
		}
	}
	/**
	 * Adiciona um evento de mouseleave
	 * @param {function} fn funcão a ser executada pelo evento
	 */
	library.Events.prototype.setActionsMouseLeave = function (fn) {
		if (typeof fn !== "undefined" && typeof fn === "function") {
			this._element.addEventListener("mouseleave", fn);
		} else {
			throw ("paremtro incorreto esperado tipo function e foi encontrado " + typeof fn);
		}
	}
	/**
	 * Adiciona um evento de mousedown
	 * @param {function} fn funcão a ser executada pelo evento
	 */
	library.Events.prototype.setActionsMouseDown = function (fn) {
		if (typeof fn !== "undefined" && typeof fn === "function") {
			this._element.addEventListener("mousedown", fn);
		} else {
			throw ("paremtro incorreto esperado tipo function e foi encontrado " + typeof fn);
		}
	}
	/**
	 * Adiciona um evento de mouseup
	 * @param {function} fn funcão a ser executada pelo evento
	 */
	library.Events.prototype.setActionsMouseUp = function (fn) {
		if (typeof fn !== "undefined" && typeof fn === "function") {
			this._element.addEventListener("mouseup", fn);
		} else {
			throw ("paremtro incorreto esperado tipo function e foi encontrado " + typeof fn);
		}
	}
	/**
	 * Adiciona um evento de mousemove
	 * @param {function} fn funcão a ser executada pelo evento
	 */
	library.Events.prototype.setActionsMouseMove = function (fn) {
		if (typeof fn !== "undefined" && typeof fn === "function") {
			this._element.addEventListener("mousemove", fn);
		} else {
			throw ("paremtro incorreto esperado tipo function e foi encontrado " + typeof fn);
		}
	}
	/**
	 * Adiciona um evento de touchstart
	 * @param {function} fn funcão a ser executada pelo evento
	 */
	library.Events.prototype.setActionsTouchStart = function (fn) {
		if (typeof fn !== "undefined" && typeof fn === "function") {
			this._element.addEventListener("touchstart", fn);
		} else {
			throw ("paremtro incorreto esperado tipo function e foi encontrado " + typeof fn);
		}
	}
	/**
	 * Adiciona um evento de touchend
	 * @param {function} fn funcão a ser executada pelo evento
	 */
	library.Events.prototype.setActionsTouchEnd = function (fn) {
		if (typeof fn !== "undefined" && typeof fn === "function") {
			this._element.addEventListener("touchend", fn);
		} else {
			throw ("paremtro incorreto esperado tipo function e foi encontrado " + typeof fn);
		}
	}
	/**
	 * Adiciona um evento de touchmove
	 * @param {function} fn funcão a ser executada pelo evento
	 */
	library.Events.prototype.setActionsTouchMove = function (fn) {
		if (typeof fn !== "undefined" && typeof fn === "function") {
			this._element.addEventListener("touchmove", fn);
		} else {
			throw ("paremtro incorreto esperado tipo function e foi encontrado " + typeof fn);
		}
	}
	/**
	 * Adiciona um evento de focus
	 * @param {function} fn funcão a ser executada pelo evento
	 */
	library.Events.prototype.setActionsFocus = function (fn) {
		if (typeof fn !== "undefined" && typeof fn === "function") {
			this._element.addEventListener("focus", fn);
		} else {
			throw ("paremtro incorreto esperado tipo function e foi encontrado " + typeof fn);
		}
	}
	/**
	 * Adiciona um evento de swipeleft
	 * @param {function} fn funcão a ser executada pelo evento
	 */
	library.Events.prototype.setActionsSwipeLeft = function (fn) {
		if (typeof fn !== "undefined" && typeof fn === "function") {
			this._element.addEventListener("swipeleft", fn);
		} else {
			throw ("paremtro incorreto esperado tipo function e foi encontrado " + typeof fn);
		}
	}
	/**
	 * Adiciona um evento de swiperight
	 * @param {function} fn funcão a ser executada pelo evento
	 */
	library.Events.prototype.setActionsSwipeRight = function (fn) {
		if (typeof fn !== "undefined" && typeof fn === "function") {
			this._element.addEventListener("swiperight", fn);
		} else {
			throw ("paremtro incorreto esperado tipo function e foi encontrado " + typeof fn);
		}
	}
	/**
	 * Adiciona um evento de keydown
	 * @param {function} fn funcão a ser executada pelo evento
	 */
	library.Events.prototype.setActionsKeyDown = function (fn) {
		if (typeof fn !== "undefined" && typeof fn === "function") {
			this._element.addEventListener("keydown", fn);
		} else {
			throw ("paremtro incorreto esperado tipo function e foi encontrado " + typeof fn);
		}
	}
	/**
	 * Adiciona um evento de keyup
	 * @param {function} fn funcão a ser executada pelo evento
	 */
	library.Events.prototype.setActionsKeyup = function (fn) {
		if (typeof fn !== "undefined" && typeof fn === "function") {
			this._element.addEventListener("keyup", fn);
		} else {
			throw ("paremtro incorreto esperado tipo function e foi encontrado " + typeof fn);
		}
	}
	/**
	 * Adiciona um evento de resize
	 * @param {function} fn funcão a ser executada pelo evento
	 */
	library.Events.prototype.setActionsResize = function (fn) {
		if (typeof fn !== "undefined" && typeof fn === "function") {
			this._element.addEventListener("resize", fn);
		} else {
			throw ("paremtro incorreto esperado tipo function e foi encontrado " + typeof fn);
		}
	}
	/**
	 * Adiciona um evento de error
	 * @param {function} fn funcão a ser executada pelo evento
	 */
	library.Events.prototype.setActionsOnError = function (fn) {
		if (typeof fn !== "undefined" && typeof fn === "function") {
			this._element.addEventListener("error", fn);
		} else {
			throw ("paremtro incorreto esperado tipo function e foi encontrado " + typeof fn);
		}
	}
	/**
	 * Adiciona um evento de orientationchange
	 * @param {function} fn funcão a ser executada pelo evento
	 */
	library.Events.prototype.setActionsOrientationChange = function (fn) {
		if (typeof fn !== "undefined" && typeof fn === "function") {
			this._element.addEventListener("orientationchange", fn);
		} else {
			throw ("paremtro incorreto esperado tipo function e foi encontrado " + typeof fn);
		}
	}
	/**
	 * Adiciona um evento de scroll
	 * @param {function} fn funcão a ser executada pelo evento
	 */
	library.Events.prototype.setActionsScroll = function (fn) {
		if (typeof fn !== "undefined" && typeof fn === "function") {
			this.element.addEventListener("scroll", fn);
		} else {
			throw ("paremtro incorreto esperado tipo function e foi encontrado " + typeof fn);
		}
	}
	/**
	 * Modifica os eventos de ponteiro do mouse
	 * @param {string} events os eventos do ponteiro do mouse
	 */
	library.Events.prototype.setPointerEvents = function (events) {
		if (typeof events !== "undefined" && typeof events != "" && typeof events === "string") {
			this._element.style.pointerEvents = events;
		}
	}
	/**
	 * Adiciona um evento de mousewheel
	 * @param   {function} fn funcao a ser executada pelo evento
	 */
	library.Events.prototype.setActionsWheel = function (fn) {
		var keys = {
			37: 1,
			38: 1,
			39: 1,
			40: 1,
			32: 1,
			33: 1,
			34: 1,
			35: 1,
			36: 1
		};
		var navegador = window.navigator.userAgent;
		if (typeof fn !== "undefined" && typeof fn === "function") {
			if (navegador.indexOf("Firefox") > 0) {
				this._element.addEventListener("DOMMouseScroll", fn);
			} else if (navegador.indexOf("Chrome") > 0) {
				this._element.addEventListener("wheel", fn);
			}
		} else {
			throw ("paremtro incorreto esperado tipo function e foi encontrado " + typeof fn);
		}
		if (this._element.parentElement.addEventListener) // older FF
			this._element.parentElement.addEventListener('DOMMouseScroll', preventDefault, false);
		//container.parentElement.onwheel = preventDefault; // modern standard
		this._element.parentElement.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
		this._element.parentElement.ontouchmove = preventDefault; // mobile
		this._element.parentElement.onkeydown = preventDefaultForScrollKeys;

		function preventDefault(e) {
			e = e || window.event;
			if (e.preventDefault)
				e.preventDefault();
			e.returnValue = false;
		}

		function preventDefaultForScrollKeys(e) {
			if (keys[e.keyCode]) {
				preventDefault(e);
				return false;
			}
		}

	}
	/**
	*
	*/
	function Element() {
		this._stage = document.getElementById("Stage");
		this._element = document.createElement("div");
		this._element.id = "Element";
		this._element.draggable = false;
		this._element.style.WebkitUserSelect = "none";
		this._element.style.MozUserSelect = "none";
		this._element.style.MSUserSelect = "none";
		this._element.style.userSelect = "none";
		this._element.style.zIndex = 0;
		this._element.style.position = "absolute";
		this._element.style.left = 0;
		this._element.style.top = 0;
		this._element.style.width = "0px";
		this._element.style.height = "0px";
		this._element.style.margin = 0;
		this._element.style.padding = 0;
		this._element.style.display = "block";
		this._element.style.opacity = 1;
		this._element.style.transform = "scaleX(1) scaleY(1) skewX(0) skewY(0deg) rotate(0deg)";
		this._element.style.transformOrigin = "50% 50%";
		this._element.style.border = "none";
		this._element.style.cursor = "auto";
		this._element.style.outline = "none";
		this._element.style.overflow = "visible";
		this._element.title = "";
		this._element.tabIndex = "";
		this._stage.appendChild(this._element);
		this._styleAtual = window.getComputedStyle(this._element, null);
	}
	Element.prototype = Object.create(library.Events.prototype);
	Element.prototype.constructor = Element;
	/**
	 * Retorna o DOM Element do objeto atual
	 * @returns {object} HTML Element
	 */
	Element.prototype.getElement = function () {
		return this._element;
	}
	/**
	 * Retorna o id do objeto
	 * @returns {string} id do objeto
	 */
	Element.prototype.getID = function () {
		return this._element.id;
	}
	/**
	 * Modifica o id do objeto
	 * @param {string} novoID o novo id do objeto
	 */
	Element.prototype.setID = function (novoID) {
		if (typeof novoID !== "undefined" && typeof novoID === "string") {
			this._element.id = novoID;
		} else {
			throw ("parametro incorreto esperado tipo string e foi encontrado tipo " + typeof novoID);
		}
	}
	/**
	 * Modifica a visibilidade do objeto
	 * @param {boolean} visivel a visibilidade do objeto
	 */
	Element.prototype.setVisible = function (visivel) {
		if (typeof visivel !== "undefined" && typeof visivel === "boolean") {
			if (visivel === true) {
				this._element.style.display = "block";
			} else if (visivel === false) {
				this._element.style.display = "none";
			}
		} else {
			throw ("parametro incorreto esperado tipo boolean e foi encontrado tipo " + typeof visivel);
		}
	}
	/**
	 * Retorna a visibilidade do objeto
	 * @returns {boolean} a visibilidade atual do objeto
	 */
	Element.prototype.getVisible = function () {
		if (this._element.style.display === "block") {
			return true;
		} else if (this._element.style.display === "none") {
			return false;
		}
	}
	/**
	 * Modifica o overflow do objeto
	 * @param {string} overflow o estado do overflow do objeto
	 */
	Element.prototype.setOverFlow = function (overflow) {
		if (typeof overflow !== "undefined" && typeof overflow === "string") {
			this._element.style.overflow = overflow;
		}
	}
	/**
	 * Retorna o estado do overflow do objeto
	 * @returns {string} o overflow do objeto
	 */
	Element.prototype.getOverflow = function () {
		return this._element.style.overflow;
	}
	/**
	 * Retorna a opacidade do objeto
	 * @returns {number} opacidade atual do objeto
	 */
	Element.prototype.getOpacity = function () {
		return this._element.style.opacity;
	}
	/**
	 * Modifica a opacidade do objeto
	 * @param {number} nivelOpacidade a quantidade de opacidade do objeto
	 */
	Element.prototype.setOpacity = function (nivelOpacidade) {
		if (typeof nivelOpacidade !== "undefined" && typeof nivelOpacidade === "number") {
			this._element.style.opacity = nivelOpacidade;
		} else {
			throw ("parametro incorreto esperado tipo number e foi encontrado tipo " + typeof nivelOpacidade);
		}
	}
	/**
	 * Retorna em qual camada o objeto se encontra
	 * @returns {number} a camada do objeto
	 */
	Element.prototype.getLayer = function () {
		return this._element.style.zIndex;
	}
	/**
	 * Modifica a camada de sobreposicao do objeto
	 * @param {number} camada indice de camada do objeto
	 */
	Element.prototype.setLayer = function (camada) {
		if (typeof camada !== "undefined" && typeof camada === "number") {
			this._element.style.zIndex = camada;
		} else {
			throw ("parametro incorreto esperado tipo number e foi encontrado tipo " + typeof camada);
		}
	}
	/**
	 * Retorna o posicionamento no eixo X do objeto
	 * @returns {number} posicionamento x
	 */
	Element.prototype.getLeft = function () {
		return this._element.offsetLeft;
	}
	/**
	 * Modifica o posicionamento no eixo x do objeto
	 * @param {number} posLeft posicionamento x do objeto
	 */
	Element.prototype.setLeft = function (posLeft) {
		if (typeof posLeft !== "undefined" && typeof posLeft === "number") {
			this._element.style.left = posLeft + "px";
		} else {
			throw ("parametro incorreto esperado tipo number e foi encontrado tipo " + typeof posLeft);
		}
	}
	/**
	 * Retorna o posicionamento no eixo y do objeto
	 * @returns {number} posicionamento y
	 */
	Element.prototype.getTop = function () {
		return this._element.offsetTop;
	}
	/**
	 * Modifica o posicionamento no eixo y do objeto
	 * @param {number} posTop posicionamento y do objeto
	 */
	Element.prototype.setTop = function (posTop) {
		if (typeof posTop !== "undefined" && typeof posTop === "number") {
			this._element.style.top = posTop + "px";
		} else {
			throw ("parametro incorreto esperado tipo number e foi encontrado tipo " + typeof posTop);
		}
	}
	/**
	 * Modifica ambos posicionamento nos eixos x e y do objeto
	 * @param {number} posLeft posicionamento x
	 * @param {number} posTop  posicionamento y
	 */
	Element.prototype.setPosition = function (posLeft, posTop) {
		if (typeof posLeft !== "undefined" && typeof posLeft === "number") {
			this._element.style.left = posLeft + "px";
		} else {
			throw ("parametro incorreto esperado tipo number e foi encontrado tipo " + typeof posLeft);
		}
		if (typeof posTop !== "undefined" && typeof posTop === "number") {
			this._element.style.top = posTop + "px";
		} else {
			throw ("parametro incorreto esperado tipo number e foi encontrado tipo " + typeof posTop);
		}
	}
	/**
	 * Retorna a largura do objeto
	 * @returns {number} largura do objeto
	 */
	Element.prototype.getWidth = function () {
		return this._element.offsetWidth;
	}
	/**
	 * Modifica a largura do objeto
	 * @param {number} largura a largura do objeto
	 */
	Element.prototype.setWidth = function (largura) {
		if (typeof largura !== "undefined" && typeof largura === "number") {
			this._element.style.width = largura + "px";
			this._element.style.transform = this._styleAtual.getPropertyValue("transform");
		} else {
			throw ("parametro incorreto esperado tipo number e foi encontrado tipo " + typeof largura);
		}
	}
	/**
	 * Retorna a altura do objeto
	 * @returns {number} altura do objeto
	 */
	Element.prototype.getHeight = function () {
		return this._element.offsetHeight;
	}
	/**
	 * Modifica a altura do objeto
	 * @param {number} altura altura do objeto
	 */
	Element.prototype.setHeight = function (altura) {
		if (typeof altura !== "undefined" && typeof altura === "number") {
			this._element.style.height = altura + "px";
			this._element.style.transform = this.styleAtual.getPropertyValue("transform");
		} else {
			throw ("parametro incorreto esperado tipo number e foi encontrado tipo " + typeof altura);
		}
	}
	/**
	 * Modifica ambos largura e altura do objeto
	 * @param {number} largura largura do objeto
	 * @param {number} altura  altura do objeto
	 */
	Element.prototype.setSize = function (largura, altura) {
		if (typeof largura !== "undefined" && typeof largura === "number") {
			this._element.style.width = largura + "px";
			this._element.style.transform = this._styleAtual.getPropertyValue("transform");
		} else {
			throw ("parametro incorreto esperado tipo number e foi encontrado tipo " + typeof largura);
		}
		if (typeof altura !== "undefined" && typeof altura === "number") {
			this._element.style.height = altura + "px";
			this._element.style.transform = this._styleAtual.getPropertyValue("transform");
		} else {
			throw ("parametro incorreto esperado tipo number e foi encontrado tipo " + typeof altura);
		}
	}
	/**
	 * Modifica a larguraMinima do objeto
	 * @param {number} larguraMinima largura minima do objeto
	 */
	Element.prototype.setMinWidth = function (larguraMinima) {
		if (typeof larguraMinima !== "undefined" && typeof larguraMinima === "number") {
			this._element.style.minWidth = larguraMinima + "px";
		} else {
			throw ("parametro incorreto esperado tipo number e foi encontrado tipo " + typeof larguraMinima);
		}
	}
	/**
	 * Modifica a largura maxima do objeto
	 * @param {number} larguraMaxima largura maxima do objeto
	 */
	Element.prototype.setMaxWidth = function (larguraMaxima) {
		if (typeof larguraMaxima !== "undefined" && typeof larguraMaxima === "number") {
			this._element.style.maxWidth = larguraMaxima + "px";
		} else {
			throw ("parametro incorreto esperado tipo number e foi encontrado tipo " + typeof larguraMaxima);
		}
	}
	/**
	 * Modifica a transformacao do objeto atual
	 * @param {string} transformacao transform atual do objeto
	 */
	Element.prototype.setTransform = function (transformacao) {
		if (typeof transformacao !== "undefined" && typeof transformacao === "string") {
			this._element.style.WebkitTransform = transformacao;
			this._element.style.transform = transformacao;
		} else {
			throw ("parametro incorreto esperado tipo string e foi encontrado tipo " + typeof transformacao);
		}

	}
	/**
	 * Modifica o ponto de origem do objeto
	 * @param {string} origin transformacao da origem do objeto
	 */
	Element.prototype.setTransformOrigin = function (origin) {
		if (typeof origin !== "undefined" && typeof origin === "string") {
			this._element.style.transformOrigin = origin;
		} else {
			throw ("parametro incorreto esperado tipo string e foi encontrado tipo " + typeof origin);
		}
	}
	/**
	 * Retorna o tipo cursor do objeto atual
	 * @returns {string} cursor do objeto
	 */
	Element.prototype.getCursor = function () {
		return this._element.style.cursor;
	}
	/**
	 * Modifica o cursor do objeto
	 * @param {string} cursor cursor do objeto
	 */
	Element.prototype.setCursor = function (cursor) {
		if (typeof cursor !== "undefined" && typeof cursor === "string") {
			this._element.style.cursor = cursor;
		} else {
			throw ("parametro incorreto esperado tipo string e foi encontrado tipo " + typeof cursor);
		}
	}
	/**
	 * Modifica o nivel de sombra do objeto
	 * @param {string} shadow nivel de sombra 
	 */
	Element.prototype.setShadow = function (shadow) {
		if (typeof shadow !== "undefined" && typeof shadow === "string") {
			this._element.style.boxShadow = shadow;
		} else {
			throw ("parametro incorreto esperado tipo string e foi encontrado tipo " + typeof shadow);
		}
	}
	/**
	 * Modifica a área de clip do objeto
	 * @param {string} clipValue área de clip
	 */
	Element.prototype.setClip = function (clipValue) {
		if (typeof clipValue !== "undefined" && typeof clipValue === "string") {
			this._element.style.clip = "rect(" + clipValue + ")";
		} else {
			throw ("parametro incorreto esperado tipo string e foi encontrado tipo " + typeof clipValue);
		}
	}
	/**
	 * Modifica o title do objeto
	 * @param {string} title o title do objeto
	 */
	Element.prototype.setTitle = function (title) {
		if (typeof title !== "undefined" && typeof title === "string") {
			this._element.title = title;
		} else {
			throw ("parametro incorreto esperado tipo string e foi encontrado tipo " + typeof title);
		}
	}
	/**
	 * Modifica o tabIndex do objeto
	 * @param {number} index tabIndex do objeto
	 */
	Element.prototype.setTabIndex = function (index) {
		if (typeof index !== "undefined" && typeof index === "number") {
			this._element.tabIndex = index;
		} else {
			throw ("parametro incorreto esperado tipo number e foi encontrado tipo " + typeof index);
		}
	}
	/**
	 * Modifica os filtros do objeto
	 * @param {string} filters filtros do objeto
	 */
	Element.prototype.setFilters = function (filters) {
		if (typeof filters !== "undefined" && typeof filters === "string") {
			this._element.style.WebkitFilter = filters;
			this._element.style.filter = filters;
		} else {
			throw ("parametro incorreto esperado tipo string e foi encontrado tipo " + typeof filters);
		}
	}
	
	function Shape() {
		Element.call(this);
	}
	Shape.prototype = Object.create(Element.prototype);
	Shape.prototype.constructor = Shape;
	/**
	 * Modifica a cor do background
	 * @param {string} bg background do objeto
	 */
	Shape.prototype.setBackgroundColor = function (bg) {
		if (typeof bg !== "undefined" && typeof bg === "string") {
			this._element.style.backgroundColor = bg;
		} else {
			throw ("parametro incorreto esperado tipo string e foi encontrado tipo " + typeof bg);
		}
	}
	/**
	 * Modifica a cor gradient do tipo linear
	 * @param {string} gradient cor gradient do objeto
	 */
	Shape.prototype.setGradientLinear = function (gradient) {
		var navegador = window.navigator.userAgent;
		if (typeof gradient !== "undefined" && typeof gradient === "string") {
			if (navegador.indexOf("Firefox") > 0) {
				this._element.style.backgroundImage = "-moz-linear-gradient" + gradient;
			} else if (navegador.indexOf("Chrome") > 0) {
				this._element.style.backgroundImage = "-webkit-linear-gradient" + gradient;
			} else if (window.navigator.appName === "Microsoft Internet Explorer") {
				this._element.style.backgroundColor = gradient;
			} else if (navegador.indexOf("Opera") > 0) {
				this._element.style.backgroundImage = "-o-linear-gradient" + gradient;
			}
		} else {
			throw ("parametro incorreto esperado tipo string e foi encontrado tipo " + typeof gradient);
		}
	}
	/**
	 * Modifica a cor gradient do tipo radial
	 * @param {string} gradient cor gradient do objeto
	 */
	Shape.prototype.setGradientRadial = function (gradient) {
		var navegador = window.navigator.userAgent;
		if (typeof gradient !== "undefined" && typeof gradient === "string") {
			if (navegador.indexOf("Firefox") > 0) {
				this._element.style.backgroundImage = "-moz-radial-gradient" + gradient;
			} else if (navegador.indexOf("Chrome") > 0) {
				this._element.style.backgroundImage = "-webkit-radial-gradient" + gradient;
			} else if (window.navigator.appName === "Microsoft Internet Explorer") {
				this._element.style.backgroundColor = gradient;
			} else if (navegador.indexOf("Opera") > 0) {
				this._element.style.backgroundImage = "-o-radial-gradient" + gradient;
			}
		} else {
			throw ("parametro incorreto esperado tipo string e foi encontrado tipo " + typeof gradient);
		}
	}
	/**
	 * Modifica a cor da borda do objeto
	 * @param {string} color cor da borda
	 */
	Shape.prototype.setBorderColor = function (color) {
		if (typeof color !== "undefined" && typeof color === "string") {
			this._element.style.borderColor = color;
		} else {
			throw ("parametro incorreto esperado tipo string e foi encontrado tipo " + typeof color);
		}
	}
	/**
	 * Modifica o estilo da borda
	 * @param {string} estilo estilo da borda
	 */
	Shape.prototype.setBorderStyle = function (estilo) {
		if (typeof estilo !== "undefined" && typeof estilo === "string") {
			this._element.style.borderStyle = estilo;
		} else {
			throw ("parametro incorreto esperado tipo string e foi encontrado tipo " + typeof estilo);
		}
	}
	/**
	 * Modifica a expessura da borda
	 * @param {number} expessura expessura da borda
	 */
	Shape.prototype.setBorderWidth = function (expessura) {
		if (typeof expessura !== "undefined" && typeof expessura === "number") {
			this._element.style.borderWidth = expessura + "px";
		} else {
			throw ("parametro incorreto esperado tipo number e foi encontrado tipo " + typeof expessura);
		}
	}
	/**
	 * EngineJS.Rectangle Class
	 * @class
	 * @param {string} id     o id do objeto
	 * @param {number} x      posicionamento x
	 * @param {number} y      posicionamento y
	 * @param {number} width  largura
	 * @param {number} height altura
	 */
	library.Rectangle = function (id, x, y, width, height) {
		Element.call(this);
		this._element.id = id || "Rectangle";
		this._element.style.backgroundColor = "rgba(192,192,192,1)";
		this._element.style.left = x + "px";
		this._element.style.top = y + "px";
		this._element.style.width = width + "px";
		this._element.style.height = height + "px";
		this._element.style.right = "auto";
		this._element.style.bottom = "auto";
		this._element.style.WebkitTapHightLightColor = "rgba(0,0,0,0)";
	}
	library.Rectangle.prototype = Object.create(Shape.prototype);
	library.Rectangle.prototype.constructor = library.Rectangle;
	/**
	 * Modifica os cantos do objeto
	 * @param {string} corners os cantos do objeto
	 */
	library.Rectangle.prototype.setCorners = function (corners) {
		if (typeof corners !== "undefined" && typeof corners != "" && typeof corners === "string") {
			this._element.style.borderRadius = corners + "px";
		}
	}
	/**
	 * EngineJS.Ellipse Class
	 * @class
	 * @param {string} id     o id do objeto
	 * @param {number} x      posicionamento x
	 * @param {number} y      posicionamneto y
	 * @param {number} width  largura
	 * @param {number} height altura
	 */
	library.Ellipse = function (id, x, y, width, height) {
		Element.call(this);
		this._element.id = id || "Ellipse";
		this._element.style.backgroundColor = "rgba(192,192,192,1)";
		this._element.style.borderRadius = "50%";
		this._element.style.left = x + "px";
		this._element.style.top = y + "px";
		this._element.style.width = width + "px";
		this._element.style.height = height + "px";
		this._element.style.right = "auto";
		this._element.style.bottom = "auto";
		this._element.style.WebkitTapHightLightColor = "rgba(0,0,0,0)";
	}
	library.Ellipse.prototype = Object.create(Shape.prototype);
	library.Ellipse.prototype.constructor = library.Ellipse;

	/**
	 * EngineJS.Image Class
	 * @class
	 * @param {string} id     id do objeto
	 * @param {number} x      posicionamento x
	 * @param {number} y      posicionamento y
	 * @param {number} width  largura
	 * @param {number} height altura
	 * @param {string} image  endereço da imagem
	 */
	library.Image = function (id, x, y, width, height, image) {
		Element.call(this);
		this._element.id = id || "Image";
		this._element.style.backgroundImage = "url(" + image + ")";
		this._element.style.backgroundSize = "100% 100%";
		this._element.style.left = x + "px";
		this._element.style.top = y + "px";
		this._element.style.width = width + "px";
		this._element.style.height = height + "px";
		this._element.style.backgroundPosition = "0px 0px";
		this._element.style.backgroundRepeat = "no-repeat";
		this._element.style.overflow = "visible";
		this._element.style.right = "auto";
		this._element.style.bottom = "auto";
		this._element.style.WebkitTapHightLightColor = "rgba(0,0,0,0)";

	}
	library.Image.prototype = Object.create(Element.prototype);
	library.Image.prototype.constructor = library.Image;
	/**
	 * Modifica o arquivo de imagem do objeto
	 * @param {string} src endereço da imagem
	 */
	library.Image.prototype.setImage = function (src) {
		if (typeof src !== "undefined" && typeof src === "string") {
			this._element.style.backgroundImage = "url(" + src + ")";
		} else {
			throw ("parametro incorreto esperado tipo string e foi encontrado tipo " + typeof src);
		}
	}
	/**
	 * Modifica a posicao do background do objeto
	 * @param {string} position posição do background
	 */
	library.Image.prototype.setBackgroundPosition = function (position) {
		if (typeof position !== "undefined" && typeof position === "string") {
			this._element.style.backgroundPosition = position;
		} else {
			throw ("parametro incorreto esperado tipo string e foi encontrado tipo " + typeof position);
		}
	}
	/**
	 * Modifica o tamanho do background
	 * @param {string} size tamanho do background
	 */
	library.Image.prototype.setBackgroundSize = function (size) {
		if (typeof size !== "undefined" && typeof size === "string") {
			this._element.style.backgroundSize = size;
		} else {
			throw ("parametro incorreto esperado tipo string e foi encontrado tipo " + typeof size);
		}
	}
	/**
	 * Modifica os cantos da imagem
	 * @param {number} cornersValue cantos da imagem
	 */
	library.Image.prototype.setCorners = function (cornersValue) {
		if (typeof cornersValue !== "undefined" && typeof cornersValue === "number") {
			this._element.style.borderRadius = cornersValue + "px";
		}
	}
	/**
	 * EngineJS.Text Class
	 * @class
	 * @param {string} id   id do objeto
	 * @param {number} x    posicionamento x
	 * @param {number} y    posicionamento y
	 * @param {string} text texto a ser inserido
	 */
	library.Text = function (id, x, y, text) {
		Element.call(this);
		this._element.id = id || "Text";
		this._element.innerHTML = text || "new Text";
		this._element.style.fontFamily = "Arial,Helvetica,sans-serif";
		this._element.style.fontSize = "24px";
		this._element.style.lineHeight = "normal";
		this._element.style.left = x + "px";
		this._element.style.top = y + "px";
		this._element.style.width = "auto";
		this._element.style.height = "auto";
		this._element.style.right = "auto";
		this._element.style.bottom = "auto";
		this._element.style.wordWrap = "break-word";
		this._element.style.fontWeight = "normal";
		this._element.style.WebkitTapHightLightColor = "rgba(0,0,0,0)";
	}
	library.Text.prototype = Object.create(Element.prototype);
	library.Text.prototype.constructor = library.Text;
	/**
	 * Retorna o texto do objeto
	 * @returns {string} o texto
	 */
	library.Text.prototype.getText = function () {
		return this._element.innerHTML;
	}
	/**
	 * Modifica o texto do objeto
	 * @param {string} textValue o texto a ser inserido
	 */
	library.Text.prototype.setText = function (textValue) {
		if (typeof textValue !== "undefined" && typeof textValue === "string") {
			this._element.innerHTML = textValue;
		} else {
			throw ("parametro incorreto esperado tipo string e foi encontrado tipo " + typeof textValue);
		}
	}
	library.Text.prototype.setFontFamily = function (familyValue) {
		if (typeof familyValue !== "undefined" && typeof familyValue === "string") {
			this._element.style.fontFamily = familyValue;
		} else {
			throw ("parametro incorreto esperado tipo string e foi encontrado tipo " + typeof familyValue);
		}
	}
	library.Text.prototype.setFontSize = function (sizeValue) {
		if (typeof sizeValue !== "undefined" && typeof sizeValue === "number") {
			this._element.style.fontSize = sizeValue + "px";
		} else {
			throw ("parametro incorreto esperado tipo number e foi encontrado tipo " + typeof sizeValue);
		}
	}
	library.Text.prototype.setColor = function (colorValue) {
		if (typeof colorValue !== "undefined" && typeof colorValue === "string") {
			this._element.style.color = colorValue;
		} else {
			throw ("parametro incorreto esperado tipo string e foi encontrado tipo " + typeof colorValue);
		}
	}
	library.Text.prototype.setFontWeight = function (weightValue) {
		if (typeof weightValue !== "undefined" && typeof weightValue === "number") {
			this._element.style.fontWeight = weightValue;
		} else {
			throw ("parametro incorreto esperado tipo number e foi encontrado tipo " + typeof weightValue);
		}
	}
	library.Text.prototype.setFontStyle = function (styleValue) {
		if (typeof styleValue !== "undefined" && typeof styleValue === "string") {
			this._element.style.fontStyle = styleValue;
		} else {
			throw ("parametro incorreto esperado tipo string e foi encontrado tipo " + typeof styleValue);
		}
	}
	library.Text.prototype.setTextDecoration = function (decorationValue) {
		if (typeof decorationValue !== "undefined" && typeof decorationValue === "string") {
			this._element.style.textDecoration = decorationValue;
		} else {
			throw ("parametro incorreto esperado tipo string e foi encontrado tipo " + typeof decorationValue);
		}
	}
	library.Text.prototype.setTextAlign = function (alignValue) {
		if (typeof alignValue !== "undefined" && typeof alignValue === "string") {
			this._element.style.textAlign = alignValue;
		} else {
			throw ("parametro incorreto esperado tipo string e foi encontrado tipo " + typeof alignValue);
		}
	}
	library.Text.prototype.setLetterSpacing = function (spacingValue) {
		if (typeof spacingValue !== "undefined" && typeof spacingValue === "number") {
			this._element.style.letterSpacing = spacingValue + "px";
		} else {
			throw ("parametro incorreto esperado tipo number e foi encontrado tipo " + typeof spacingValue);
		}
	}
	library.Text.prototype.setWordSpacing = function (wspacingValue) {
		if (typeof wsapcingValue !== "undefined" && typeof wspacingValue === "number") {
			this._element.style.wordSpacing = wspacingValue + "px";
		} else {
			throw ("parametro incorreto esperado tipo number e foi encontrado tipo " + typeof wspacingValue);
		}
	}
	library.Text.prototype.setLineHeight = function (lheight) {
		if (typeof lheight !== "undefined" && typeof lheight === "number") {
			this._element.style.lineHeight = lheight + "px";
		} else {
			throw ("parametro incorreto esperado tipo string e foi encontrado tipo " + typeof lheight);
		}
	}
	library.Text.prototype.setTextIdent = function (identValue) {
		if (typeof identValue !== "undefined" && typeof identValue === "number") {
			this._element.style.textIdent = identValue + "px";
		} else {
			throw ("parametro incorreto esperado tipo number e foi encontrado tipo " + typeof identValue);
		}
	}
	library.Text.prototype.setShadow = function (shadowValues) {
		if (typeof shadowValues !== "undefined" && typeof shadowValues === "string") {
			this._element.style.textShadow = shadowValues;
		} else {
			throw ("parametro incorreto esperado tipo string e foi encontrado tipo " + typeof shadowValues);
		}
	}
	/**
	 * EngineJS.Group Class
	 * @class
	 * @param {string} id     o id do objeto
	 * @param {number} x      posicionamento x
	 * @param {number} y      posicionamento y
	 * @param {number} width  largura
	 * @param {number} height altura
	 */
	library.Group = function (id, x, y, width, height) {
		Element.call(this);
		this._members = [];
		this._element.id = id;
		this._element.style.left = x + "px";
		this._element.style.top = y + "px";
		this._element.style.right = "auto";
		this._element.style.bottom = "auto";
		this.getElement().style.WebkitTapHightLightColor = "rgba(0,0,0,0)";
	}
	library.Group.prototype = Object.create(Element.prototype);
	library.Group.prototype.constructor = library.Group;

	library.Group.prototype.getMembers = function () {
		return this._members;
	}
	library.Group.prototype.addMembers = function () {
		if (typeof arguments !== "undefined" && arguments.length > 0) {
			for (var i = 0; i < arguments.length; i++) {
				this._members.push(arguments[i]);
				this._element.appendChild(this.members_[this._members.length - 1].getElement());
			}
		}
	}
	library.Group.prototype.removeMembers = function () {
		if (typeof arguments !== "undefined" && arguments.length > 0) {
			for (var i = 0; i < arguments.length; i++) {
				this._element.removeChild(document.getElementById(arguments[i]));
				this._members.pop();
			}
		}
	}
	/**
	 * EngineJS.Audio Class
	 * @class
	 * @param {string}   audio    o arquivo de audio
	 * @param {boolean} autoplay se incia com autoplay
	 */
	library.Audio = function (audio, autoplay) {
		this._audio = new Audio();
		this._audio.autoplay = autoplay || false;
		this._audio.loop = false;
		this._audio.preload = "auto";
		this._audio.src = audio;
	}
	library.Audio.prototype.getAudio = function () {
		return this._audio;
	}
	library.Audio.prototype.setAudio = function (audioValue) {
		if (typeof audioValue !== "undefined" && typeof audioValue === "string") {
			this._audio.src = audioValue;
		} else {
			throw ("parametro incorreto esperado tipo string e foi encontrado tipo " + typeof audioValue);
		}
	}
	library.Audio.prototype.setPreload = function (preloadValue) {
		if (typeof preloadValue !== "undefined" && typeof preloadValue === "boolean") {
			this._audio.preload = preloadValue;
		} else {
			throw ("parametro incorreto esperado tipo boolean e foi encontrado tipo " + typeof preloadValue);
		}
	}
	library.Audio.prototype.setAutoPlay = function (autoPlayValue) {
		if (typeof autoPlayValue !== "undefined" && typeof autoPlayValue === "boolean") {
			this._audio.autoplay = autoPlayValue;
		} else {
			throw ("parametro incorreto esperado tipo boolean e foi encontrado tipo " + typeof autoPlayValue);
		}
	}
	library.Audio.prototype.play = function () {
		if (this._audio.paused) {
			this._audio.play();
		}
	}
	library.Audio.prototype.pause = function () {
		if (!this._audio.paused) {
			this._audio.pause();
		}
	}
	/**
	 * EngineJS.Video Class
	 * @class
	 * @param {string} idValue o id do objeto
	 * @param {number} x       posicionamento x
	 * @param {number} y       posicionamento y
	 * @param {number} width   largura
	 * @param {number} height  altura
	 * @param {string} video   o arquivo de video
	 * @param {string} tipo    o tipo de video
	 */
	library.Video = function (idValue, x, y, width, height, video, tipo) {
		Element.call(this);
		this._video = document.createElement("video");
		this._sources = [];
		this._video.id = idValue || "Video";
		this._video.style.width = "100%";
		this._video.preload = "auto";
		this._video.autoplay = false;
		this._video.src = video;
		this._video.type = tipo;
		this._video.loop = false;
		this._video.controls = false;
		this._element.style.width = width + "px";
		this._element.style.height = height + "px";
		this._element.appendChild(this._video);
	}
	library.Video.prototype = Object.create(Element.prototype);
	library.Video.prototype.constructor = library.Video;

	library.Video.prototype.getVideo = function () {
		return this._video;
	}
	library.Video.prototype.setVideo = function (videoValue, typeValue) {
		if (typeof videoValue !== "undefined" && typeof typeValue !== "undefined" && typeof videoValue === "string" && typeof typeValue === "string") {
			this._video.src = videoValue;
			this._video.type = typeValue;
			//this.sources.push(document.createElement("source"));
			//this.sources[0].src = Params.src;
			//this.sources[0].type = Params.type;
		}
	}
	library.Video.prototype.getLoop = function () {
		return this._video.loop;
	}
	library.Video.prototype.setLoop = function (loopValue) {
		if (typeof loopValue !== "undefined" && typeof loopValue === "boolean") {
			if (loopValue) {
				this._video.loop = true;
			} else {
				this._video.loop = false;
			}
		}
	}
	library.Video.prototype.setControls = function (controlsValue) {
		if (typeof controlsValue !== "undefined" && typeof controlsValue === "boolean") {
			if (controlsValue) {
				this._video.controls = true;
			} else if (!controlsValue) {
				this._video.controls = false;
			}
		}
	}
	library.Video.prototype.getVolume = function () {
		return this._video.volume;
	}
	library.Video.prototype.setVolume = function (volumeValue) {
		if (typeof volumeValue !== "undefined" && typeof volumeValue === "number") {
			this._video.volume = volumeValue;
		} else {
			throw ("parametro incorreto esperado tipo number e foi encontrado tipo " + typeof volumeValue);
		}
	}
	library.Video.prototype.setPosterImage = function (posterValue) {
		if (typeof posterValue !== "undefined" && typeof posterValue === "string") {
			this._video.poster = posterValue;
		} else {
			throw ("parametro incorreto esperado tipo string e foi encontrado tipo " + typeof posterValue);
		}
	}

	library.Video.prototype.play = function () {
		if (this._video.paused) {
			this._video.play();
		}
	}
	library.Video.prototype.pause = function () {
		if (!this._video.paused) {
			this._video.pause();
		}
	}
	library.Video.prototype.setAutoPlay = function (autoPlayValue) {
		if (typeof autoPlayValue !== "undefined" && typeof autoPlayValue === "boolean") {
			this._video.autoplay = autoPlayValue;
		} else {
			throw ("parametro incorreto esperado tipo boolean e foi encontrado tipo " + typeof autoPlayValue);
		}
	}
	/**
	 * EngineJS.SpriteSheet Class
	 * @class
	 * @param {string} id           o id do objeto
	 * @param {string} image        o arquivo de imagem
	 * @param {number} collumsValue o numero de colunas
	 * @param {number} rowsValue    o numero de linhas
	 * @param {number} totalValue   o numero total de frames 
	 * @param {number} x            posicionamento x
	 * @param {number} y            posicionamento y
	 * @param {number} width        largura
	 * @param {number} height       altura
	 */
	library.SpriteSheet = function (id, image, collumsValue, rowsValue, totalValue, x, y, width, height) {
		library.Image.call(this);
		this._paused = true;
		this._playing = false;
		this._currentFrame = 0;
		this._frame = 0;
		this._loop = false;
		this._fps = 24;
		this._complete = false;
		this._collums = collumsValue;
		this._rows = rowsValue;
		this._totalFrames = totalValue;
		this._element.id = id || "SpriteSheet";
		this._element.style.backgroundSize = "100% 100%";
		this._element.style.backgroundImage = "url(" + image + ")";
		this._element.style.backgroundRepeat = "no-repeat";
		this._element.style.left = x + "px";
		this._element.style.top = y + "px";
		this._element.style.width = width + "px";
		this._element.style.height = height + "px";
	}
	library.SpriteSheet.prototype = Object.create(library.Image.prototype);
	library.SpriteSheet.prototype.constructor = library.SpriteSheet;

	library.SpriteSheet.prototype.isPaused = function () {
		return this._paused;
	}

	library.SpriteSheet.prototype.getCurrentFrame = function () {
		return this._currentFrame;
	}
	library.SpriteSheet.prototype.setLoop = function (loopValue) {
		if (typeof loopValue !== "undefined" && typeof loopValue === "boolean") {
			this._loop = loopValue;
		}
	}
	library.SpriteSheet.prototype.setFPS = function (fpsValue) {
		if (typeof fpsValue !== "undefined" && typeof fpsValue === "number") {
			this._fps = fpsValue;
		}
	}
	library.SpriteSheet.prototype.isComplete = function () {
		return this._complete;
	}
	library.SpriteSheet.prototype.play = function () {
		var self = this;
		var antes = new Date();
		var cancel;
		var anima;
		var y = 0;
		var x = 0;
		var enterFrame;
		if (this._paused) {
			this._paused = false;
			this._playing = true;
			if (this._complete) {
				this._complete = false;
				this._currentFrame = 0;
				this._frame = 0;
				this._element.style.backgroundPosition = 0;
			}
			anima = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
				return setTimeout(callback, 1000 / self._fps);
			};
			anima(looping);

			function looping() {
				enterFrame = setTimeout(function () {
					anima(looping);
				}, 1000 / fps);
				this._currenFrame++;
				this._frame++;
				/*self.element.style.backgroundPositionX = parseInt(self.element.style.backgroundPositionX) - self.element.offsetWidth + "px";*/
				this._element.style.backgroundPosition = parseInt(this._element.style.backgroundPosition) - this._element.offsetWidth + "px " + this.getTop() + "px";
				if (this._frame === this._collums) {
					this._element.offsetTop -= this._element.offsetHeight;
					/*self.element.style.backgroundPositionX = 0;
				self.element.style.backgroundPositionY = parseInt(self.element.style.backgroundPositionY) - self.element.offsetHeight + "px";*/
					this._frame = 0;
					this._element.style.backgroundPosition = this._frame + "px " + this.getTop() + "px";
				}
				if (this._currenFrame >= this._totalFrames) {
					if (this._loop) {
						this._element.offsetTop = 0;
						this._currenFrame = 0;
						this._frame = 0;
						this._element.style.backgroundPosition = "0px 0px";
					} else {
						this._complete = true;
						this._paused_ = true;
						this._playing = false;
						window.cancelAnimationFrame(anima);
						clearTimeout(enterFrame);
						if (typeof callback === "function") {
							callback();
						}
					}
				}
				if (this._paused) {
					window.cancelAnimationFrame(anima);
					clearTimeout(enterFrame);
					this._playing = false;
				}
			}
		}
	}
	library.SpriteSheet.prototype.pause = function () {
		if (!this._paused) {
			this._paused = true;
			this._playing = false;
		}
	}
	library.SpriteSheet.prototype.resume = function () {
		this._complete = false;
		this._paused = true;
		this._playing = false;
		this._currentFrame = 0;
		this._frame = 0;
		this._element.style.backgroundPosition = "0px 0px";
	}
	/**
	 * EngineJS.Stage Class
	 * @class
	 * @param   {number} width  largura
	 * @param   {number} height altura
	 */
	library.Stage = function (width, height) {
		this._bodyElement = document.body;
		this._metaResponsive = null;
		this._headElement = null;
		this._element = document.createElement("div");
		this._autoPlay = false;
		this._centerStage = false;
		this._responsiveScale = false;
		document.title = "Untitled";
		this._element.id = "Stage";
		this._element.style.position = "relative";
		this._element.style.zIndex = 0;
		this._element.style.backgroundColor = "rgb(255,255,255)";
		this._element.style.backgroundImage = "none";
		this._element.style.backgroundSize = "100% 100%";
		this._element.style.right = "auto";
		this._element.style.bottom = "auto";
		this._element.style.width = width + "px";
		this._element.style.height = height + "px";
		this._element.style.minWidth = "0px";
		this._element.style.maxWidth = "none";
		this._element.style.overflow = "hidden";
		this._element.style.display = "block";
		this._bodyElement.style.margin = 0;
		this._bodyElement.style.padding = 0;
		this._element.oncontextmenu = function () {
			return false;
		}
		this._bodyElement.insertBefore(this._element, this._bodyElement.firstChild);
	}

	library.Stage.prototype = Object.create(library.Events.prototype);
	library.Stage.prototype.constructor = library.Stage;
	
	library.Stage.prototype.getElement = function(){
		return this._element;
	}
	library.Stage.prototype.setTitle = function (title) {
		if (typeof title !== "undefined" && typeof title === "string") {
			document.title = title
		} else {
			throw ("esperado tipo string foi encontrado tipo " + typeof title);
		}
	}
	library.Stage.prototype.setWidth = function (width) {
		if (typeof width !== "undefined" && typeof width === "number") {
			this._element.style.width = width + "px";
		} else {
			throw ("parametro incorreto esperado tipo number e foi encontrado tipo " + typeof width);
		}
	}
	library.Stage.prototype.setHeight = function (height) {
		if (typeof height !== "undefined" && typeof height === "number") {
			this._element.style.height = height + "px";
		} else {
			throw ("parametro incorreto esperado tipo number e foi encontrado tipo " + typeof height);
		}
	}
	library.Stage.prototype.setSize = function (width, height) {
		if (typeof width !== "undefined" && typeof width === "number") {
			this._element.style.width = width + "px";
		} else {
			throw ("parametro incorreto esperado tipo number e foi encontrado tipo " + typeof width);
		}
		if (typeof height !== "undefined" && typeof height === "number") {
			this._element.style.height = height + "px";
		} else {
			throw ("parametro incorreto esperado tipo number e foi encontrado tipo " + typeof height);
		}
	}
	library.Stage.prototype.setBackgroundColor = function (background) {
		if (typeof background !== "undefined" && typeof background === "string") {
			this._element.style.backgroundColor = background;
		} else {
			throw ("parametro incorreto esperado tipo string e foi encontrado tipo " + typeof background);
		}
	}
	library.Stage.prototype.setBackgroundGradient = function (gradient) {
		var navegador = window.navigator.userAgent;
		if (typeof gradient !== "undefined" && typeof gradient === "string") {
			if (navegador.indexOf("Firefox") > 0) {
				this._element.style.backgroundImage = "-moz-linear-gradient" + gradient;
			} else if (navegador.indexOf("Chrome") > 0) {
				this._element.style.backgroundImage = "-webkit-linear-gradient" + gradient;
			} else if (window.navigator.appName === "Microsoft Internet Explorer") {
				this._element.style.backgroundImage = gradient;
			} else if (navegador.indexOf("Opera") > 0) {
				this._element.style.backgroundImage = "-o-linear-gradient" + gradient;
			}
		} else {
			throw ("parametro incorreto esperado tipo string e foi encontrado tipo " + typeof gradient);
		}
	}
	library.Stage.prototype.setMinWidth = function (minWidth) {
		if (typeof minWidth !== "undefined" && typeof minWidth === "number") {
			this._element.style.minWidth = minWidth + "px";
		} else {
			throw ("parametro incorreto esperado tipo number foi encontrado tipo " + typeof minWidth);
		}
	}
	library.Stage.prototype.setMaxWidth = function (maxWidth) {
		if (typeof maxWidth !== "undefined" && typeof maxWidth === "number") {
			this._element.style.maxWidth = maxWidth + "px";
		} else {
			throw ("parametro incorreto esperado tipo number foi encontrado tipo " + typeof maxWidth);
		}
	}
	library.Stage.prototype.setOverFlow = function (overflowX, overflowY) {
		if (typeof overflowX !== "undefined" && typeof overflowX === "string") {
			this._element.style.overflowX = overflowX;
		} else {
			throw ("parametro incorreto esperado tipo string foi encontrado tipo " + typeof overflowX);
		}
		if (typeof overflowY !== "undefined" && typeof overflowY === "string") {
			this._element.style.overflowY = overflowY;
		} else {
			throw ("parametro incorreto esperado tipo string foi encontrado tipo " + typeof overflowY);
		}
	}
	library.Stage.prototype.setCenterStage = function (center) {
		if (typeof center !== "undefined" && typeof center === "boolean") {
			this._centerStage = center;
			if (this._centerStage) {
				this._element.style.left = "50%";
				this._element.style.transform = "translate(-50%)";
			} else {
				this._element.style.left = "0px";
				this._element.style.transform = "none";
			}
		} else {
			throw ("parametro incorreto esperado tipo boolean e foi encontrado tipo " + typeof center);
		}
	}
	library.Stage.prototype.setCustomCursor = function (cursor) {
		if (typeof cursor !== "undefined" && typeof cursor === "string") {
			this._element.style.cursor = "url(" + cursor + "),auto";
		} else {
			throw ("parametro incorreto esperado tipo boolean e foi encontrado tipo " + typeof cursor);
		}
	}
	library.Stage.prototype.setResposinveScale = function (responsive) {
		if (typeof responsive !== "undefined" && typeof responsive === "boolean") {
			this._responsiveScale = responsive;
			if (this.responsiveScale) {
				this._headElement = document.head;
				this._metaResponsive = document.createElement("meta");
				this._metaResponsive.name = "viewport";
				this._metaResponsive.content = "width=device-width,initial-scale=1";
				this._headElement.insertBefore(this._metaResponsive, document.getElementsByTagName("title")[0]);
				this._element.style.width = "100%";
				this._element.style.height = "auto";
				this._element.style.paddingBottom = "56.25%";
				this._element.style.transform = "scale(" + window.innerWidth + ")";
			} else {
				this._responsiveScale = false;
				this._headElement.removeChild(this._metaResponsive);
				this._element.style.width = "initial";
				this._element.style.height = "initial";
				this._element.style.paddingBottom = "initial";
			}
		} else {
			throw ("parametro incorreto esperado tipo boolean e foi encontrado tipo " + typeof responsive);
		}
	}

})(EngineJS);