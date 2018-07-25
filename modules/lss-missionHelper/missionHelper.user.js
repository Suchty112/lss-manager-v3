(($, win, I18n) => {
	function setValues() {
		I18n.translations.de['lssm']['missionHelper'] = {
			diyMission: 'Dieser Einsatz scheint ein selbst erstellter Verbandsgroßeinsatz zu sein.',
			vge: 'Verbandsgroßeinsatz',
			siwa: 'Sicherheitswache',
			missionNotDefined: 'Dieser Einsatz ist noch nicht aufgelistet.',
			patients: 'Patienten',
			transport: 'Transport',
			tragehilfe: 'Tragehilfe',
			prisoners: 'Gefangene',
			averageMinimumEmployeesFire: 'Durchschnittlich mindestens benötigte Feuerwehrleute',
			averageMinimumEmployeesPolice: 'Durchschnittlich mindestens benötigte Polizisten/Polizistinnen',
			to: 'bis zu',
			vehicles: {
				lf: 'Löschfahrzeuge',
				dlk: 'Drehleitern',
				rw: 'Rüstwagen/AB-Rüst',
				elw1: 'ELW 1',
				elw2: 'ELW 2',
				atem: 'GW-Atemschutz',
				oel: 'GW-Öl',
				mess: 'GW-Messtechnik',
				gefahr: 'GW-Gefahrgut',
				gwl2: 'Schlauchwagen',
				dekon: 'Dekon-P',
				fwk: 'Feuerwehrkran',
				hoehen: 'GW-Höhenrettung',
				fustw: 'Funkstreifenwagen',
				boot: 'Boot',
				lebefkw: 'Leichter Befehlskraftwagen',
				fukw: 'Führungskraftwagen',
				grukw: 'Gruppenkraftwagen',
				gefkw: 'Gefangenenkraftwagen',
				wawe: 'Wasserwerfer',
				nef: 'NEF',
				rth: 'RTH',
				lna: 'KdoW-LNA',
				orgl: 'KdoW-OrgL',
				ktw: 'KTW oder RTW',
				lfogkworw: 'LF oder GKW oder RW',
				gkw: 'Gerätekraftwagen',
				mzkw: 'Mehrzweckkraftwagen',
				mtwtz: 'MTW-TZ',
				radlader: 'Radlader (BRmG R) mit LKW K 9',
				anhdle: 'Anhänger Drucklufterzeugung',
				polheli: 'Polizeihubschrauber',
				flf: 'Flugfeldlöschfahrzeug',
				rtf: 'Rettungstreppenfahrzeug',
				taucher: 'Taucher',
				mek: 'MEK-Fahrzeuge',
				sek: 'SEK-Fahrzeuge'
			}
		}

		I18n.translations.en['lssm']['missionHelper'] = {
		}

		I18n.translations.nl['lssm']['missionHelper'] = {
		}
	}

	var missionHelp = $('mission_help');

	var aaoText = '';
	markup = '<div class="alert alert-warning">';

	if (missionHelp.length > 0) {
		setValues();
		var missionId = missionHelp.attr('href').split("/").pop();
		mission = lssm.missions[missionId];
		if (mission) {
			if (mission['onlyRd'] !== true) {
				// not Ambulance-only Missions
				// If VGE
				if (mission['vge'] === true) {
					aaoText += '<h4>' + I18n.t('lssm.missionHelper.vge') + '</h4>';
				}
				// If Sicherheitswache
				if (mission['siwa'] === true) {
					aaoText += '<h4>' + I18n.t('lssm.missionHelper.siwa') + '</h4>';
				} else {
					// Number of patients
					if ($(".mission_patient").length > 0) {
						aaoText += '<span class="badge">' + $(".mission_patient").length + (($(".mission_patient").length > 1) ? ' Patienten' : ' Patient') + '</span><br><br>';
					}
					// Add vehicles
					vehicles = mission['vehicles'];
					$.each(vehicles, function (key, val) {
						aaoText += val + 'x ' + I18n.t('lssm.missionHelper.vehicles.' + key);
						if (mission['percentages'] && mission['percentages'][key]) {
							aaoText += ' (' + mission['percentages'][key] + '%)<br>';
						} else {
							aaoText += ' (100%)<br>';
						}
					});
					// Add patients
					if (mission['patients']) {
						if (mission['patients']['min'] != mission['patients']['max']) {
							aaoText += '<br>' + I18n.t('lssm.missionHelper.patients') + ': ' + mission['patients']['min'] + ' ' + I18n.t('lssm.missionHelper.to') + ' ' + mission['patients']['max'];
						} else {
							aaoText += '<br>' + I18n.t('lssm.missionHelper.patients') + ': ' + mission['patients']['max'];
						}
						if (mission['patients']['transport'] || mission['patients']['specialisation']) {
							aaoText += '<br>' + I18n.t('lssm.missionHelper.transport') + ': ';
							if (mission['patients']['transport']) {
								aaoText += mission['patients']['transport'] + '%';
							}
							if (mission['patients']['specialisation']) {
								aaoText += ' (' + mission['patients']['specialisation'] + ')';
							}
						}
						if (mission['patients']['nef']) {
							aaoText += '<br>' + I18n.t('lssm.missionHelper.vehicles.nef') + ': ' + mission['patients']['nef'] + '%';
						}
						if (mission['patients']['rth']) {
							aaoText += '<br>' + I18n.t('lssm.missionHelper.vehicles.rth') + ': ' + mission['patients']['rth'] + '%';
						}
						if (mission['patients']['tragehilfe']) {
							aaoText += '<br>' + I18n.t('lssm.missionHelper.tragehilfe') + ': ' + mission['patients']['tragehilfe'] + '%';
						}
						if ($(".mission_patient").length >= 5) {
							aaoText += '<br>1x ' + I18n.t('lssm.missionHelper.vehicles.lna') + ' (100%)';
						}
						if ($(".mission_patient").length >= 10) {
							aaoText += '<br>1x ' + I18n.t('lssm.missionHelper.vehicles.orgl') + ' (100%)';
						}
						aaoText += '<br>';
					}
					// Add prisoners
					if (mission['prisoners']) {
						if (mission['prisoners']['min'] != mission['prisoners']['max']) {
							aaoText += '<br>' + I18n.t('lssm.missionHelper.prisoners') + ': ' + mission['prisoners']['min'] + ' ' + I18n.t('lssm.missionHelper.to') + ' ' + mission['prisoners']['max'];
						} else {
							aaoText += '<br>' + I18n.t('lssm.missionHelper.prisoners') + ': ' + mission['prisoners']['max'];
						}
					}
					// Add minuimum needed averageMinimumEmployees
					if (mission['special'] && mission['special']['averageMinimumEmployeesFire']) {
						aaoText += '<br>' + I18n.t('lssm.missionHelper.averageMinimumEmployeesFire') + ': ' + mission['special']['averageMinimumEmployeesFire'] + '<br>';
					}
					if (mission['special'] && mission['special']['averageMinimumEmployeesPolice']) {
						aaoText += '<br>' + I18n.t('lssm.missionHelper.averageMinimumEmployeesPolice') + ': ' + mission['special']['averageMinimumEmployeesPolice'] + '<br>';
					}
					// Add Credits
					if (mission["credits"]) {
						aaoText += '<br><span class="badge badge-secondary"> ~ ' + parseInt(mission['credits']).toLocaleString() + ' Credits</span>';
					}
					// Add Expansions only if Mission is not an expanded one or is not an Event-Mission
					if (!$('#missionH1 s')[0] || !$('#missionH1').text().match(/\[Event\]/)[0]) {
						if (mission['expansions']) {
							aaoText += '<br>';
							$.each(mission['expansions'], function () {
								aaoText += '<a href="../einsaetze/' + $(this)[0] + '"><span class="badge">' + $(this)[1] + ' </span></a>';
							});
						}
					}
				}
			} else {
				// Ambulance-only Missions
				if (mission['transport'] || mission['specialisation']) {
					aaoText += '<br>' + I18n.t('lssm.missionHelper.transport') + ': ';
					if (mission['transport']) {
						aaoText += mission['transport'] + '%';
					}
					if (mission['specialisation']) {
						aaoText += ' (' + mission['specialisation'] + ')';
					}
				}
				if (mission['nef']) {
					aaoText += '<br>' + I18n.t('lssm.missionHelper.vehicles.nef') + ': ' + mission['nef'] + '%';
				}
				if (mission['rth']) {
					aaoText += '<br>' + I18n.t('lssm.missionHelper.vehicles.rth') + ': ' + mission['rth'] + '%';
				}
				if (mission['tragehilfe']) {
					aaoText += '<br>' + I18n.t('lssm.missionHelper.tragehilfe') + ': ' + mission['tragehilfe'] + '%';
				}
				aaoText += '<br>';
			}
			markup += '<h3>' + mission['name'] + '</h3><br>';
		} else {
			aaoText = I18n.t('lssm.missionHelper.missionNotDefined');
		}
	} else {
		aaoText += I18n.t('lssm.missionHelper.diyMission');
	}
	// Set markup
	markup += aaoText + '</div>';
	$('#mission-form').prepend(markup);

})($, window, I18n);
