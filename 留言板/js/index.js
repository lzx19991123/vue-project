var vm = new Vue({
				el: "#app",
				data: {
					list: [],
					username: "",
					message: ""

				},
				methods: {
					add: function() {
						this.list.push({
							name: this.username,
							message: this.message
						})
						this.username = "";
						this.message = "";

					},
					showDelete: function() {
						$("#modal-1").show();

					},
					upHide: function($index) {
						$("#modal-1").hide();
						this.list.splice($index, 1)
					},
					upHides: function($index) {
						$("#modal-1").hide();
					}
				}

			});