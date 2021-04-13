/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	// - another specific IPv4/6 to listen on a specific interface
	// - "0.0.0.0", "::" to listen on any interface
	// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", // The URL path where MagicMirror is hosted. If you are using a Reverse proxy
	// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	// or add a specific IPv4 of 192.168.1.5 :
	// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, // Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", // HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", // HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR", "DEBUG"], // Add "DEBUG" for even more logging
	timeFormat: 12,
	units: "imperial",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		//===== CORE MODULES =====//
		{
			module: "alert",
			config: {
				welcome_message: "Welcome to MagicMirror!",
				effect: "bouncyflip",
				alert_effect: "bouncyflip",
				display_time: 5000
			}
		}, {
			module: "updatenotification",
			position: "middle_center",
			updateInterval: 86400000
		}, {
			module: "MMM-network-signal",
			position: "top_right",
			config: {
				updateInterval: 5000, // Time in ms between connection tests
				maxTimeout: 1000, // Max timeout for each ping in ms
				showMessage: false, // Show status message based on connection strength
				animationSpeed: 0, // Icon change animation time in ms,
				flexDirection: 'row-reverse', // When the icon is alone, display it on the right
				scale: 0.3 // how big or small should the ping icon be?
			}
		}, {
			module: "clock",
			position: "top_right",
			config: {
				displayType: "analog",
				secondsColor: "#FF0000",
				analogFace: "face-001",
				analogSize: "325px",
				showDate: false,
				analogShowDate: false
			}
		}, {
			module: "MMM-Block",
			position: "top_left",
			config: {
				height: 30
			}
		}, {
			module: "clock",
			position: "top_left"
		}, {
			module: "calendar",
			header: "Upcoming Calendar",
			position: "top_left",
			config: {
				//~ fetchInterval: 3600000,
				fetchInterval: 5000,
				showLocation: true,
				maximumEntries: 20,
				//~ maximumNumberOfDays: 3,
				colored: true,
				coloredSymbolOnly: true,
				calendars: [{
					name: "Personal",
					color: "#4169E1",
					url: "https://calendar.google.com/calendar/ical/z.battenfield%40gmail.com/private-c854954daa16aa05f01f79cd0385854e/basic.ics"
				}, {
					name: "Twitch",
					symbol: "twitch",
					color: "#9147FE",
					url: "https://calendar.google.com/calendar/ical/oor8jojc9b5cbkrl2oalsnfj64%40group.calendar.google.com/private-e523d11e9bb152e1e9434d8df33ca5ef/basic.ics"
				}, {
					name: "US Holidays",
					color: "#4A9E4E",
					url: "https://calendar.google.com/calendar/ical/en.usa%23holiday%40group.v.calendar.google.com/public/basic.ics"
				}]
			}
		}, {
			module: "weather",
			position: "top_right",
			header: "5-Day Weather Forecast",
			config: {
				weatherProvider: "openweathermap",
				type: "forecast",
				location: "Alpine, UT",
				locationID: "5770732", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "4e56b8f1693543a340d07509e528d2e1",
				tempUnits: "imperial",
				roundTemp: true,
				updateInterval: 1800000,
				initialLoadDelay: 1000,
				appendLocationNameToHeader: false
			}
		}, {
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openweathermap",
				type: "current",
				location: "Hogwarts",
				locationID: "5770732", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "4e56b8f1693543a340d07509e528d2e1",
				tempUnits: "imperial",
				updateInterval: 1800000,
				showWindDirection: false,
				appendLocationNameToHeader: false
			}
		}, {
			module: "newsfeed",
			position: "top_center",
			config: {
				feeds: [{
					title: "LDS Newsroom",
					url: "https://newsroom.churchofjesuschrist.org/ldsnewsroom/jsp/rsstop15.jsp"
				}],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: false,
				broadcastNewsUpdates: false,
				truncDescription: true,
				lengthDescription: 200,
				reloadInterval: 1800000,
				updateInterval: 15000,
				ignoreOldItems: true,
				ignoreOlderThan: 432000000
			}
		},
		//===== 3RD PARTY MODULES =====//
		{
			module: "MMM-BurnIn",
			config: {
				updateInterval: 15,
				invertDuration: 5
			}
		}, {
			module: 'DailyXKCD',
			position: 'top_left',
			config: {
				invertColors: true,
				showTitle: true,
				randomComic: true,
				limitComicHeight: 550,
				updateInterval: 600000
			}
		}, {
			module: 'MMM-DailyPokemon',
			position: 'top_left',
			config: {
				updateInterval: 600000,
				showType: true,
				grayscale: false,
				minPoke: 1,
				maxPoke: 802,
				stats: true,
				genera: true,
				gbaMode: true,
				flavorText: true
			}
		}, {
			module: 'MMM-Dad-Jokes',
			// position: 'bottom_bar',
			position: 'lower_third',
			config: {
				updateInterval: 60000
			}
		}, {
			module: "MMM-Carousel",
			config: {
				mode: 'positional',
				top_left: {
					enabled: true,
					ignoreModules: [
						'MMM-Block',
						'clock'
					],
					overrideTransitionInterval: 30000
				}
			}
		}
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }