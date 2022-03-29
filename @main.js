"use strict";

class ArtificialMentalRetardation
{
	#candies;
	#droppers;
	#running;

	constructor()
	{
		if(!ArtificialMentalRetardation.instance)
		{
		}
		return ArtificialMentalRetardation.instance||(ArtificialMentalRetardation.instance=this);
	}

	set candies(value)
	{
		this.#candies=value;
	}
	set droppers(value)
	{
		this.#droppers=value;
	}
	async start(handCursor)
	{
		this.#running=true;
		while(this.#running)
		{
			const candies=this.#candies.filter((candy) => candy&&candy.color!=="");
			if(candies.length===0)
			{
				break;
			}
			const candy=candies[Utility.random(candies.length)];
			while(this.#running)
			{
				let position={left: candy.left+candy.width/2, top: candy.top+candy.height/2};
				PointerEvent.dispatchEvent("pointermove", Utility.lerp(handCursor.left, position.left, 0.1), Utility.lerp(handCursor.top, position.top, 0.1));
				await Utility.waitForSeconds(0.033);
				if((Math.abs(handCursor.left-position.left)<2)&&(Math.abs(handCursor.top-position.top)<2))
				{
					PointerEvent.dispatchEvent("pointerdown", position.left, position.top);
					await Utility.waitForSeconds(0.25);

					let rect=this.#droppers[(candy.color==="green")? 0:(candy.color==="red")? 1:2].rect;
					if(Utility.random(3)===0)
					{
						rect=this.#droppers[Utility.random(this.#droppers.length)].rect;
					}
					position={left: rect.left+Math.random()*rect.width, top: 100};
					while(this.#running)
					{
						PointerEvent.dispatchEvent("pointermove", Utility.lerp(handCursor.left, position.left, 0.1), Utility.lerp(handCursor.top, position.top, 0.1));
						await Utility.waitForSeconds(0.033);
						if((Math.abs(handCursor.left-position.left)<2)&&(Math.abs(handCursor.top-position.top)<2))
						{
							PointerEvent.dispatchEvent("pointerup", position.left, position.top);
							await Utility.waitForSeconds(1);
							break;
						}

					}
					break;
				}
			}
		}
	}
	stop()
	{
		this.#running=false;
	}
}
class Image
{
	static get EndScreen_lose()
	{
		return "none";
	}
	static get EndScreen_pointerout()
	{
		return "url(shapes/135.svg)";
	}
	static get EndScreen_pointerover()
	{
		return "url(shapes/137.svg)";
	}
	static get EndScreen_timeup()
	{
		return "url(shapes/111.svg)";
	}
	static get EndScreen_win()
	{
		return "url(shapes/114.svg)";
	}
	static get StartScreen_pointerout()
	{
		return "url(shapes/92.svg)";
	}
	static get StartScreen_pointerover()
	{
		return "url(shapes/93.svg)";
	}
}
class Sound
{
	static #background;
	static #exit;
	static #good;
	static #lose;
	static #pointerover;
	static #start;
	static #timeup;
	static #win;
	static #wrong;

	static constructor()
	{
		Sound.#background=new Audio("sounds/6_bgmusic05.wav.mp3");
		Sound.#exit=new Audio("sounds/78.mp3");
		Sound.#good=null;
		Sound.#lose=null;
		Sound.#pointerover=new Audio("sounds/95.mp3");
		Sound.#start=new Audio("sounds/2_開始玩.mp3");
		Sound.#timeup=new Audio("sounds/4_lose.mp3");
		Sound.#win=new Audio("sounds/2_win.mp3");
		Sound.#wrong=new Audio("sounds/103.mp3");
	}
	static get background()
	{
		return Sound.#background;
	}
	static get exit()
	{
		return Sound.#exit;
	}
	static get good()
	{
		return Sound.#good;
	}
	static get lose()
	{
		return Sound.#lose;
	}
	static get pointerover()
	{
		return Sound.#pointerover;
	}
	static get start()
	{
		return Sound.#start;
	}
	static get timeup()
	{
		return Sound.#timeup;
	}
	static get win()
	{
		return Sound.#win;
	}
	static get wrong()
	{
		return Sound.#wrong;
	}
}

class Candy extends Draggable
{
	static #triggerTop=undefined;

	#accept=false;
	#action;
	#color
	#dropping=false;
	#originalTop;
	#dropperColor;

	static constructor()
	{
		const fishBowl=document.querySelector(".fish-bowls> .fish-bowl-red");
		const height=parseFloat(getComputedStyle(fishBowl).height);
		Candy.#triggerTop=parseFloat(getComputedStyle(fishBowl).top)+height*0.125+20;
	}
	constructor(color, left, top, action)
	{
		const candy=document.createElement("div");
		candy.className="candy";
		candy.style["z-index"]="98";
		candy.style["left"]=left+"px";
		candy.style["top"]=top+"px";
		frame.domelement.appendChild(candy);

		const svg=document.createElementNS("http://www.w3.org/2000/svg", "svg");
		svg.setAttribute("width", "74");
		svg.setAttribute("height", "54");
		svg.setAttribute("viewBox", "0 0 74 54");
		svg.setAttribute("version", "1.1");
		svg.$parent=candy;
		candy.appendChild(svg);

		let path=document.createElementNS("http://www.w3.org/2000/svg", "path");
		path.setAttribute("d", "m69.805 14.584 1 0.45q0.7 0.45 0.95 1.5 0.2 0.9 0 1.8-0.5 1.8-1.3 2.9l0.95 1.2q1 2.2 0 3.3l-0.05 0.05 0.9 1.85q0.4 1.15 0.25 2.1l-0.5 0.7q-0.05 1.25-0.9 2.05-0.6 0.45-2.25 0.5-0.55-1.25-1.1-1.8-0.4-0.6-1.65-1.2l-1.65-1.2-0.3-0.25-0.3-0.3-1.25-2-0.2 0.85-0.45 0.7q-0.5-0.05-0.85-0.65l-0.4-1.1q-0.8-3.05-0.7-7.75 2.5-2.1 2.75-5.55 0.1-1.6 0.9-2.25l1.35-0.1 1.4 0.1q1.5-0.35 2.1 0.4l0.3 1.15-0.1 1.2 0.15 0.85 0.95 0.5");
		path.setAttribute("fill", (color==="red")? "#f00":(color==="green")? "#0f0":(color==="blue")? "#00f":"");
		path.setAttribute("fill-rule", "evenodd");
		path.$parent=candy;
		svg.appendChild(path);

		path=document.createElementNS("http://www.w3.org/2000/svg", "path");
		path.setAttribute("d", "m61.105 22.884q0.85 4.95-0.15 9.9-1 4.7-3.6 8.65-2.65 3.95-6.5 6.6-4 2.7-8.75 3.55l-9.4-0.3q-4.5-1.15-8.35-4-3.85-2.8-6.4-6.9-2.65-4.25-3.5-9.25-0.9-5 0.15-9.9 0.95-4.7 3.6-8.7 2.6-3.95 6.45-6.6 4-2.7 8.75-3.5l9.45 0.3q4.45 1.1 8.3 3.95 3.8 2.8 6.4 6.95 2.65 4.2 3.55 9.25");
		path.setAttribute("fill", (color==="red")? "#f00":(color==="green")? "#0f0":(color==="blue")? "#00f":"");
		path.setAttribute("fill-rule", "evenodd");
		path.$parent=candy;
		svg.appendChild(path);

		path=document.createElementNS("http://www.w3.org/2000/svg", "path");
		path.setAttribute("d", "m9.7046 23.384q2.45 3.65 4.5 4.75l0.8-0.75q1.25 0.75 1.3 3.15v1.85l-0.2 1.75q-0.05 1.15-1 1.55l-0.35 0.25-0.25 0.35q-1.45 2.95-3.3 5.15-1.85 2.05-3.55 3.1l-1.5 0.2-0.35-0.5q-0.5-1-0.3-3.05-1.25-1.6-1.5-2.95 0-0.8 0.55-2.65 0.45-1.7 0.25-2.75l-0.45-1.6-0.65-1.55q-0.65-1.3-0.7-2.9 0-1.55 0.55-2.9v-0.1l-1.25-0.55q-0.7-0.4-0.85-1.05l0.1-0.4q0.45-0.95 2.45-1.45 3.35-0.55 5.7 3.05");
		path.setAttribute("fill", (color==="red")? "#f00":(color==="green")? "#0f0":(color==="blue")? "#00f":"");
		path.setAttribute("fill-rule", "evenodd");
		path.$parent=candy;
		svg.appendChild(path);

		path=document.createElementNS("http://www.w3.org/2000/svg", "path");
		path.setAttribute("d", "m5.7046 40.284 0.35-1.5 0.95-0.7 1.15-0.4q0.35-0.3 0.25-0.95l-0.3-0.65-0.35-0.5-0.85-1.35 0.4-1.15q0.5-0.7 0.45-1.05l-0.8-1.4q-1.9-3.3-2.35-3.75l0.2-0.4 0.8-0.85q0.45-0.55 0.25-1.15l-1.55-0.55-0.05 0.05q-0.55 1.45-0.55 2.75l0.05 1.3 0.4 1.15 0.5 1.1 0.65 1.95q0.35 1.05 0.15 2.35l-0.65 3.25q-0.1 1.35 0.9 2.45");
		path.setAttribute("fill", (color==="red")? "#752605":(color==="green")? "#006500":(color==="blue")? "#00003e":"");
		path.setAttribute("fill-rule", "evenodd");
		path.$parent=candy;
		svg.appendChild(path);

		path=document.createElementNS("http://www.w3.org/2000/svg", "path");
		path.setAttribute("d", "m68.805 12.034-0.1 1.2 0.15 0.85 0.95 0.5 1 0.45q0.7 0.45 0.95 1.5 0.2 0.9 0 1.8-0.5 1.8-1.3 2.9l0.95 1.2q1 2.2 0 3.3l0.85 1.9q0.4 1.15 0.25 2.1l-0.5 0.7q-0.05 1.25-0.9 2.05-0.6 0.45-2.25 0.5-0.55-1.25-1.1-1.8-0.4-0.6-1.65-1.2l-1.65-1.2-0.3-0.25-0.3-0.3-1.25-2-0.2 0.85-0.45 0.7-0.45-0.15q-0.05 8.8-5.45 15.6-5.5 6.85-13.95 8.35-8.55 1.5-16.05-3.15-7.5-4.6-10.5-13.05l-0.45 0.3-0.35 0.25-0.25 0.35q-1.45 2.95-3.3 5.15-1.85 2.05-3.55 3.1l-1.5 0.2-0.35-0.5q-0.5-1-0.3-3.05-1.25-1.6-1.5-2.95 0-0.8 0.55-2.65 0.45-1.7 0.25-2.75l-0.45-1.6-0.65-1.55q-0.65-1.3-0.7-2.9 0-1.55 0.55-2.9v-0.1l-1.25-0.55q-0.7-0.4-0.85-1.05l0.1-0.4q0.45-0.95 2.45-1.45 3.35-0.55 5.7 3.05 2.4 3.55 4.4 4.7-0.3-4.6 1.05-8.95 1.25-4.25 3.85-7.75 2.6-3.55 6.25-5.8 3.75-2.4 8.15-3.15 8.55-1.55 16.15 3.15 7.5 4.65 10.5 13.2l-0.05-0.5q2.5-2.1 2.75-5.55 0.1-1.6 0.9-2.25l1.35-0.1 1.4 0.1q1.5-0.35 2.1 0.4z");
		path.setAttribute("fill", "none");
		path.setAttribute("stroke", (color==="red")? "#f03":(color==="green")? "#0c0":(color==="blue")? "#009":"");
		path.setAttribute("stroke-linecap", "round");
		path.setAttribute("stroke-linejoin", "round");
		path.setAttribute("stroke-width", "2");
		path.$parent=candy;
		svg.appendChild(path);

		path=document.createElementNS("http://www.w3.org/2000/svg", "path");
		path.setAttribute("d", "m57.905 24.234q0.75 4.15-0.05 8.3-0.75 3.9-2.85 7.25-2.05 3.3-5.1 5.5-3.2 2.2-6.95 2.9-5.45 0.95-10.65-1.45-5-2.4-8.25-7.25 3.15 2.45 7 3.45l8 0.3q3.75-0.7 6.95-2.8 3.1-2 5.25-5 2.1-3.1 2.95-6.65 0.85-3.75 0.15-7.5-0.85-4.75-3.8-8.45-2.9-3.6-7.05-5.5 5.35 1.55 9.3 6.05 3.95 4.6 5.1 10.85");
		path.setAttribute("fill", "#fff");
		path.setAttribute("fill-opacity", ".70196");
		path.setAttribute("fill-rule", "evenodd");
		path.$parent=candy;
		svg.appendChild(path);

		super(candy);
		this.#color=color;
		this.#action=action;
		this.#originalTop=top;

		this.$dragend=(left, top, dragger) =>
		{
			this.element.left=left-this.element.width/2;
			this.element.top=top-this.element.height/2+15;
			this.drop();
		}
		this.$dragstart=(left, top) =>
		{
			if(this.#color==="")
			{
				return null;
			}
			this.element.left=left-this.element.width/2;
			this.element.top=top-this.element.height/2+15;
			return this;
		}
		this.$dragmove=(left, top, dragger) =>
		{
			this.element.left=left-this.element.width/2;
			this.element.top=top-this.element.height/2+15;
		}
	}

	get color()
	{
		return this.#color;
	}
	get domelement()
	{
		return this.element.domelement;
	}
	get left()
	{
		return this.element.left;
	}
	get top()
	{
		return this.element.top;
	}
	get width()
	{
		return this.element.width;
	}
	get height()
	{
		return this.element.height;
	}

	action()
	{
		if(this.#dropping===true)
		{
			let top=parseFloat(getComputedStyle(this.domelement).top);
			if((top>Candy.#triggerTop)&&(this.element.style["z-index"]!=2))
			{
				this.#dropperColor&&this.#action&&this.#action(this.#accept, this.#dropperColor);
				if(this.#accept)
				{
					this.#color="";
					this.element.style["z-index"]=2;
				}
				this.#dropperColor="";
			}
			if(top<this.#originalTop)
			{
				this.element.style["top"]=Math.min(top+10, this.#originalTop)+"px";
			}
			if(parseFloat(getComputedStyle(this.domelement).top)>=this.#originalTop)
			{
				this.#dropping=false;
				this.element.style["pointer-events"]="auto";
				this.element.transform="none";
			}
		}
	}
	drop(color)
	{
		const left=parseFloat(getComputedStyle(this.domelement).left);
		if((left<180)||(left>650))
		{
			this.#originalTop=Math.min(450, this.#originalTop);
		}
		if(this.#accept=(this.#color===color))
		{
			this.#originalTop=350;
		}
		this.#dropperColor=color;
		this.#dropping=true;
		this.element.style["pointer-events"]="none";
	}
}
class Dropper extends Droppable
{
	constructor(color)
	{
		super(document.querySelector(`.droppers > .dropper-${color}`));

		this.$drop=(left, top, dragger) =>
		{
			dragger.drop(color);
		}
	}
	get rect()
	{
		return this.element.rect;
	}
}
class HandCursor extends Cursor
{
	constructor()
	{
		if(!HandCursor.instance)
		{
			super(document.querySelector(".hand-cursor"));

			this.$pointerdown=(left, top) =>
			{
				new Audio("sounds/1_pick.mp3").play();
				this.element.left=left-35;
				this.element.top=top-105;
				this.image="url(shapes/132.svg)";
			}
			this.$pointermove=(left, top) =>
			{
				this.element.left=left-35;
				this.element.top=top-105;
			}
			this.$pointerup=(left, top) =>
			{
				this.image="url(shapes/129.svg)";
			}
			this.$visible=(value) =>
			{
				this.element.left=Cursor.left-35;
				this.element.top=Cursor.top-105;
			}
		}
		return HandCursor.instance||(HandCursor.instance=this);
	}
	set image(value)
	{
		this.element.image=value;
	}
	get left()
	{
		return this.element.left+35;
	}
	get top()
	{
		return this.element.top+105;
	}
}

class Main
{
	artificialMentalRetardation
	autoplay;
	backgroundMusic;
	candies;
	droppers=new Array();
	endScreen;
	handCursor
	running
	score;
	startScreen;
	starCursor;
	timer;

	constructor()
	{
		this.autoplayClick=this.autoplayClick.bind(this);
		this.gameover=this.gameover.bind(this);
		this.restart=this.restart.bind(this);
		this.result=this.result.bind(this);
		this.start=this.start.bind(this);
		this.timeup=this.timeup.bind(this);

		new BackgroundMusic();
		new ExitButton();
		new FullScreen();

		this.artificialMentalRetardation=new ArtificialMentalRetardation();
		this.autoplay=new AutoPlay(this.autoplayClick);
		this.droppers.push(new Dropper("green"));
		this.droppers.push(new Dropper("red"));
		this.droppers.push(new Dropper("blue"));
		this.endScreen=new EndScreen(this.restart);
		this.handCursor=new HandCursor();
		this.startScreen=new StartScreen(this.start);
		this.starCursor=new StarCursor();
		this.timer=new Timer(this.timeup);

		this.artificialMentalRetardation.droppers=this.droppers;
		this.running=true;
		this.starCursor.visible=true;
	}

	autoplayClick(running)
	{
		if(running)
		{
			if(this.startScreen.visible)
			{
				this.startScreen.visible=false;
				this.start();
			}
			else if(this.endScreen.visible)
			{
				this.restart();
			}
			this.handCursor.enable=false;
			for(let i=0; i<this.candies.length; i++)
			{
				this.candies[i]&&(this.candies[i].enable=false);
			}
			for(let i=0; i<this.droppers.length; i++)
			{
				this.droppers[i].enable=false;
			}
			this.artificialMentalRetardation.start(this.handCursor)
		}
		else
		{
			this.artificialMentalRetardation.stop();
			this.handCursor.enable=true;
			for(let i=0; i<this.candies.length; i++)
			{
				this.candies[i]&&(this.candies[i].enable=true);
			}
			for(let i=0; i<this.droppers.length; i++)
			{
				this.droppers[i].enable=true;
			}
		}
	}
	gameover(result)
	{
		this.artificialMentalRetardation.stop();
		this.autoplay.reset();
		this.handCursor.enable=true;
		for(let i=0; i<this.candies.length; i++)
		{
			this.candies[i]&&(this.candies[i].enable=true);
		}
		for(let i=0; i<this.droppers.length; i++)
		{
			this.droppers[i].enable=true;
		}

		this.endScreen.result=result;
		this.endScreen.visible=true;
		this.handCursor.visible=false;
		this.starCursor.visible=true;
		this.running=false;
		for(let i=0; i<this.candies.length; i++)
		{
			frame.removeChild(this.candies[i].domelement);
			this.candies[i]=null;
		}
	}
	restart()
	{
		this.endScreen.visible=false;
		this.start();
	}
	async result(correct, color)
	{
		new Audio("sounds/"+((correct)? "105":"103")+".mp3").play();
		let imageUrl="url(shapes/"+((correct)? "104":"102")+".svg)";
		let element=document.querySelector(".fish-bowls > .fish-bowl-"+color+" > .result");
		for(let i=0; i<3; i++)
		{
			element.style["background-image"]=imageUrl;
			await Utility.waitForSeconds(0.1);
			element.style["background-image"]="none";
			await Utility.waitForSeconds(0.1);
		}
		element.style["background-image"]=imageUrl;
		await Utility.waitForSeconds(0.5);
		element.style["background-image"]="none";
	}
	async start()
	{
		this.handCursor.visible=true;
		this.starCursor.visible=false;
		this.running=true;
		this.score=0;
		this.timer.start(60);

		this.candies=new Array(15);
		const colors=Utility.randoms(this.candies.length);
		const positions=[{left: 100, top: 430}, {left: 20, top: 455}, {left: 215, top: 535}, {left: 250, top: 420}, {left: 185, top: 460}, {left: 290, top: 470}, {left: 380, top: 440}, {left: 320, top: 535}, {left: 480, top: 480}, {left: 410, top: 520}, {left: 530, top: 425}, {left: 590, top: 460}, {left: 520, top: 540}, {left: 700, top: 425}, {left: 610, top: 530}];
		for(let i=0; i<this.candies.length; i++)
		{
			const candy=new Candy((colors[i]<5)? "red":(colors[i]<10)? "green":"blue", positions[i].left, positions[i].top, async (accept, dropperColor) =>
			{
				if(accept)
				{
					if(++this.score===15)
					{
						this.gameover("win");
					}
					else
					{
						this.result(true, dropperColor);
					}
				}
				else
				{
					this.result(false, dropperColor);
				}
			});
			this.candies[i]=candy;
		}
		this.artificialMentalRetardation.candies=this.candies;

		while(this.running)
		{
			for(let i=0; i<this.candies.length; i++)
			{
				this.candies[i]&&this.candies[i].action();
			}
			await Utility.waitForSeconds(0.033);
		}
	}
	timeup()
	{
		this.gameover("timeup");
	}
}

Candy.constructor();
Sound.constructor();
new Main();