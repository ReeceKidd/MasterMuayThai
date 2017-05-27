(function(){
	var kick = document.getElementById('kick'),
		punch = document.getElementById('punch'),
		elbow = document.getElementById('elbow'),
		knee = document.getElementById('knee'),
		throw_b = document.getElementById('throw'),
		arr_btns = [kick, punch, elbow, knee, throw_b],

		head = document.getElementById('head'),
		torso = document.getElementById('torso'),
		groin = document.getElementById('groin'),
		legs = document.getElementById('legs'),

		fighter = document.getElementById('fighter'),
		fighter_ss = document.getElementById('fighter_ss'),

		mes_hit = document.getElementById('mes_hit'),
		score_value_mes = document.getElementById('score_value'),
		score_value = "",
		type_hit_str = "",

		begin_btn = document.getElementById('begin_btn'),
		started_screen = document.getElementById('started_screen'),
		switcher_audio = document.getElementById('switcher_audio'),
		audio_el = document.getElementById('audio_el'),

		fighter_s = document.getElementById('fighter_s'),

		fighter_s_disp = fighter_s.style.display,

		iter_audio = 0,
		iterator_btns = 0,
		iter_gifs = 1,
		id_btn = 0;

// animations
		setInterval(change_gif, 1000);

		function change_gif(){
			iter_gifs++;

			if (iter_gifs>4)
			{
				iter_gifs = Math.floor(Math.random() * 4) + 1 ;
			}

			fighter_ss.style.backgroundImage = 'url(Images/hit'+iter_gifs+'.gif)';
			console.log(fighter_ss);
		}

// click begin
		begin_btn.addEventListener('click', function(){

			started_screen.classList.add('hide');
			switcher_audio.classList.add('swit_mod');

			if (fighter_s_disp == 'none' || fighter_s_disp == "null" || fighter_s_disp == "")
			{
				console.log(fighter_s.style);
				fighter_s.classList.add('option_f');
			}


			setTimeout(function(){
				started_screen.style.display = 'none';
			},
			1200);
		});

// audio
	switcher_audio.addEventListener('click', function(){
		iter_audio++;
		if(iter_audio%2 == 1)
		{
			audio_el.pause();
			switcher_audio.style.backgroundImage = "url('Images/m_off.jpg')";

			// switcher_audio.style.background = "url('img/m_on.jpg')";
		}
		else
		{
			audio_el.play();
			switcher_audio.style.backgroundImage = "url('Images/m_on.jpg')";
			// switcher_audio.style.background-size = "url('img/m_off.jpg')";
		}

	});

		function listner_buttons(){
			iterator_btns = 0;
			for (var i = 0; i < arr_btns.length; i++)
			{
				arr_btns[i].addEventListener("click", function(e){
					iterator_btns++;
					this.classList.add("clicked");
					remove_clicked(this);
					type_hit(this);
					if(this.id == 'throw')
					{
						fighter.classList.add('throw_f');
						score_value = 'high';
						set_score(score_value);

						setTimeout(function(){
							fighter.classList.remove('throw_f');
						},
						1500);
					}
					console.log(this);
					// return 0;
				})
			}
		}

		listner_buttons();

		function remove_clicked(a){
			// console.log(a.id);
			for(var i=0; i < arr_btns.length; i++)
			{
				if(arr_btns[i].classList.contains('clicked'))
				{
					arr_btns[i].classList.remove("clicked");
				}
			}
			a.classList.add("clicked");
		}

		function type_hit(a)
		{
			switch(a.id)
			{
				case "kick":
					type_hit_str = 'kick';
					console.log(type_hit_str);
					break;
				case "punch":
					type_hit_str = 'punch';
					console.log(type_hit_str);
					break;
				case "elbow":
					type_hit_str = 'elbow';
					console.log(type_hit_str);
					break;
				case "knee":
					type_hit_str = 'knee';
					console.log(type_hit_str);
					break;
				case "throw":
					type_hit_str = 'throw';
					console.log(type_hit_str);
					break;
				default:
					console.log('def');
					break;
			}

		}

		function set_score(a){
			console.log(a);

				if (score_value_mes.innerText) {
				    score_value_mes.innerText = a;
				}
				else
				if (score_value_mes.textContent) {
					score_value_mes.textContent = a;
				}
				else
				{
					score_value_mes.textContent = a;
				}
		}


		function set_mes_hit(a){
			if (iterator_btns == 0)
			{
				if (mes_hit.innerText) {
				    mes_hit.innerText = "SELECT A TECHNIQUE!";
				}
				else
				if (mes_hit.textContent) {
					mes_hit.textContent = "SELECT A TECHNIQUE!";
				}
				else
				{
					mes_hit.textContent = "SELECT A TECHNIQUE!";
				}

				// go out from function
				return 0;
			}
			else
			{
				if (mes_hit.innerText) {
				    mes_hit.innerText = "";
				}
				else
				if (mes_hit.textContent) {
					mes_hit.textContent = "";
				}
				else
				{
					mes_hit.textContent = "";
				}
				return 1;
			}
		}

		function animation_f(type_hit_str, e)
		{
			// if (type_hit_str == 'throw')
			// {
			// 	fighter.classList.add('throw_f');

			// 	setTimeout(function(){
			// 		fighter.classList.remove('throw_f');
			// 	},
			// 	1500);
			// }
			if(type_hit_str != "throw")
			{
				var x_mouse = e.clientX,
					y_mouse = e.clientY,
					d_c = document.createElement('div');


				document.body.appendChild(d_c);
				d_c.classList.add("damage_circle");
				d_c.style.top = y_mouse+"px";
				d_c.style.left = x_mouse+"px";

				console.log(e);

				fighter.classList.add('shake_f');

				setTimeout(function(){
					document.body.removeChild(d_c);
					fighter.classList.remove('shake_f');
				},
				400);

				// setTimeout(function(){

				// },
				// 800);
			}
		}


		head.addEventListener("click", function(e){

			console.log(type_hit_str);
			if(type_hit_str == 'kick' || type_hit_str == 'punch' || type_hit_str == 'elbow' || type_hit_str == 'knee')
			{
				score_value = 'high';
				set_score(score_value);
			}
			else if(type_hit_str == 'throw')
			{
				score_value = 'high';
				set_score(score_value);
			}
			else
			{
				console.log("some err");
			}

			var t = set_mes_hit();

			if(t == 0){
				return 0;
			}

			animation_f(type_hit_str, e);

		});

		torso.addEventListener("click", function(e){

			console.log(type_hit_str);
			if(type_hit_str == 'kick' || type_hit_str == 'knee'  )
			{
				score_value = 'medium';
				set_score(score_value);
			}
			else if(type_hit_str == 'punch' || type_hit_str == 'elbow')
			{
				score_value = 'low';
				set_score(score_value);
			}
			else if(type_hit_str == 'throw')
			{
				score_value = 'high';
				set_score(score_value);
			}
			else
			{
				console.log("some err");
			}

			var t = set_mes_hit();

			if(t == 0){
				return 0;
			}

			animation_f(type_hit_str, e);

		});

		groin.addEventListener("click", function(e){

			console.log(type_hit_str);
			if(type_hit_str == 'kick' || type_hit_str == 'punch' || type_hit_str == 'elbow' || type_hit_str == 'knee')
			{
				score_value = 'Illegal';
				set_score(score_value);
			}
			else if(type_hit_str == 'throw')
			{
				score_value = 'Illegal';
				set_score(score_value);
			}
			else
			{
				console.log("some err");
			}

			var t = set_mes_hit();

			if(t == 0){
				return 0;
			}

			animation_f(type_hit_str, e);

		});

		legs.addEventListener("click", function(e){

			console.log(type_hit_str);
			if(type_hit_str == 'kick' || type_hit_str == 'knee'  )
			{
				score_value = 'low';
				set_score(score_value);
			}
			else if(type_hit_str == 'punch' || type_hit_str == 'elbow')
			{
				score_value = 'very low';
				set_score(score_value);
			}
			else if(type_hit_str == 'throw'){
				score_value = 'high';
				set_score(score_value);
			}
			else
			{
				console.log("some err");
			}

			var t = set_mes_hit();

			if(t == 0){
				return 0;
			}

			animation_f(type_hit_str, e);

		});

})()

