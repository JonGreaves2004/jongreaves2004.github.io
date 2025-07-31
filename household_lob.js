 $(document).ready(function () {
    var currentHeading = null;

    $(window).scroll(function () {
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
        
        $('.section').each(function () {
            var element = $(this);
            var elementTop = element.offset().top;
            var elementBottom = elementTop + element.outerHeight();
            var heading = element.data('heading');
            var section = element.data('section-number');

            // Check if the element's top is at or near the top of the viewport
            if (elementTop <= viewportTop && elementBottom > viewportTop) {
                if (currentHeading !== heading) {
                    currentHeading = heading;
                    showHeading(heading);
                    showButton(section);
                }
                return false; // Break the loop once the current heading is found
            }
        });
    });

    function showHeading(headingText) {
        var $header = $('#sticky-header');
        if ($header.length === 0) {
            // Create header if it doesn't exist
            $header = $('<div id="sticky-header"></div>').appendTo('body');
        }
        $header.text(headingText);
    }
    
    function showButton(section_number) {
    		$('.jumper_menu_button').removeClass('active');
 				$('#jump_button_' + section_number).addClass('active');
				console.log(section_number);
    }
    
    $('#dev_options_button_show').click(function() {
      $('.dev_options').addClass('show_dev_options');
      $('.dev_options_launch').css('inset','32px auto auto -60px');
    });
    
    $('#dev_options_button_hide').click(function() {
      $('.dev_options').removeClass('show_dev_options');
      $('.dev_options_launch').css('inset','32px auto auto -10px');
    });
    
    // Show new questions
    $('#dev_options_button_01').click(function() {
      $('.question_wrapper[data-qset-type="new"]').addClass('show_new_question');
      $(this).css('display','none');
      $('#dev_options_button_02').css('display','flex');
    });
    
    // Hide new questions
    $('#dev_options_button_02').click(function() {
      $('.question_wrapper[data-qset-type="new"]').removeClass('show_new_question');
      $(this).css('display','none');
      $('#dev_options_button_01').css('display','flex');
    });
    
    
    // Hide/show Private or Other responses
    $('#private_or_other #1').click(function() {
      console.log('Private Individual selected');
      $('#priv_ind').css('display','block');
      $('#other').css('display','none');
      $('#personal_details').css('display','block');
      $('#business_details').css('display','none');
      $('#jump_button_02').css('display','block');
      $('#jump_button_02a').css('display','none');	    

	    
    });
    $('#private_or_other #2').click(function() {
      console.log('Other selected');
      $('#other').css('display','block');
      $('#priv_ind').css('display','none');
      $('#personal_details').css('display','none');
      $('#business_details').css('display','block');
	$('#jump_button_02a').css('display','block');
      $('#jump_button_02').css('display','none');
    });
    
	$('#disabled_gender #3').attr('checked',true);
    
    
    // Hide/show UK Residency responses
    $('#resident_yn #1').click(function() {
      console.log('Always UK resident selected');
      $('#residency').css('display','none');
    });
    $('#resident_yn #2').click(function() {
      console.log('Always UK resident selected not selected');
      $('#residency').css('display','block');
    });
    
    // Hide/show Part time occupation 
    $('#pt_yn #1').click(function() {
      $('#pt_occupation').css('display','block');
    });
    $('#pt_yn #2').click(function() {
      $('#pt_occupation').css('display','none');
    });

		// Hide/show IVA or CCJ
    $('#iva_yn #1').click(function() {
      $('#iva_ccj').css('display','block');
    });
    $('#iva_yn #2').click(function() {
      $('#iva_ccj').css('display','none');
    });
    
    // Hide/show Bankruptcy
    $('#bankrupt_yn #1').click(function() {
      $('#bankrupt').css('display','block');
    });
    $('#bankrupt_yn #2').click(function() {
      $('#bankrupt').css('display','none');
    });
    
    // Hide/show Convictions
    $('#convictions_yn #1').click(function() {
      $('#convictions').css('display','block');
    });
    $('#convictions_yn #2').click(function() {
      $('#convictions').css('display','none');
    });
    
     // Hide/show Additional Proposers
    $('#add_proposer_yn #1').click(function() {
      $('#add_proposers').css('display','block');
    });
    $('#add_proposer_yn #2').click(function() {
      $('#add_proposers').css('display','none');
    });
    
    $('#bedsits_yn #1').click(function() {
      $('#bedsits').css('display','block');
    });
    $('#bedsits_yn #2').click(function() {
      $('#bedsits').css('display','none');
    });
    
     $('#trace_access_yn #1').click(function() {
      $('#trace_access').css('display','block');
    });
    $('#trace_access_yn #2').click(function() {
      $('#trace_access').css('display','none');
    });
    
    $('#unoccupied_yn #1').click(function() {
      $('#unoccupied').css('display','block');
    });
    $('#unoccupied_yn #2').click(function() {
      $('#unoccupied').css('display','none');
    });
    
    $('#lodgers_yn #1').click(function() {
      $('#lodgers').css('display','block');
    });
    $('#lodgers_yn #2').click(function() {
      $('#lodgers').css('display','none');
    });
    
     $('#unoccupancy_pending_yn #1').click(function() {
      $('#unoccupancy_pending').css('display','block');
    });
    $('#unoccupancy_pending_yn #2').click(function() {
      $('#unoccupancy_pending').css('display','none');
    });
    
     $('#cover_refused_yn #1').click(function() {
      $('#cover_refused').css('display','block');
    });
    $('#cover_refused_yn #2').click(function() {
      $('#cover_refused').css('display','none');
    });
    
     $('#terms_appl_yn #1').click(function() {
      $('#terms_appl').css('display','block');
    });
    $('#terms_appl_yn #2').click(function() {
      $('#terms_appl').css('display','none');
    });
    
     $('#extra_prec_yn #1').click(function() {
      $('#extra_prec').css('display','block');
    });
    $('#extra_prec_yn #2').click(function() {
      $('#extra_prec').css('display','none');
    });
    
     $('#co_convicted_yn #1').click(function() {
      $('#co_convicted').css('display','block');
    });
    $('#co_convicted_yn #2').click(function() {
      $('#co_convicted').css('display','none');
    });
    
     $('#contents_cover_yn #1').click(function() {
      $('#contents_cover').css('display','block');
    });
    $('#contents_cover_yn #2').click(function() {
      $('#contents_cover').css('display','none');
    });
    
     $('#xs_waiver_yn #1').click(function() {
      $('#xs_waiver').css('display','none');
    });
    $('#xs_waiver_yn #2').click(function() {
      $('#xs_waiver').css('display','block');
    });
    
     $('#open_cover_yn #1').click(function() {
      $('#open_cover').css('display','block');
    });
    $('#open_cover_yn #2').click(function() {
      $('#open_cover').css('display','none');
    });
    
     $('#household_ncd_yn #1').click(function() {
      $('#household_ncd').css('display','block');
    });
    $('#household_ncd_yn #2').click(function() {
      $('#household_ncd').css('display','none');
    });
    
     $('#spec_items_yn #1').click(function() {
      $('#spec_items').css('display','block');
    });
    $('#spec_items_yn #2').click(function() {
      $('#spec_items').css('display','none');
    });
    
     $('#spec_items_home_yn #1').click(function() {
      $('#spec_items_home').css('display','block');
    });
    $('#spec_items_home_yn #2').click(function() {
      $('#spec_items_home').css('display','none');
    });
    
     $('#cycles_yn #1').click(function() {
      $('#cycles').css('display','block');
    });
    $('#cycles_yn #2').click(function() {
      $('#cycles').css('display','none');
    });
    
     $('#credit_card_yn #1').click(function() {
      $('#credit_card').css('display','block');
    });
    $('#credit_card_yn #2').click(function() {
      $('#credit_card').css('display','none');
    });
    
    $('#money_cover_yn #1').click(function() {
      $('#money_cover').css('display','block');
    });
    $('#money_cover_yn #2').click(function() {
      $('#money_cover').css('display','none');
    });
    
    $('#freezer_yn #1').click(function() {
      $('#freezer').css('display','block');
    });
    $('#freezer_yn #2').click(function() {
      $('#freezer').css('display','none');
    });
    
    $('#outbuildings_theft_yn #1').click(function() {
      $('#outbuildings_theft').css('display','block');
    });
    $('#outbuildings_theft_yn #2').click(function() {
      $('#outbuildings_theft').css('display','none');
    }); 

    $('#above_comm_yn #1').click(function() {
      $('#above_comm').css('display','block');
    });
    $('#above_comm_yn #2').click(function() {
      $('#above_comm').css('display','none');
    }); 

    $('#flooding_yn #1').click(function() {
      $('#flooding').css('display','none');
    });
    $('#flooding_yn #2').click(function() {
      $('#flooding').css('display','block');
    }); 

    $('#buildings_cover_yn #1').click(function() {
      $('#buildings_cover').css('display','block');
    });
    $('#buildings_cover_yn #2').click(function() {
      $('#buildings_cover').css('display','none');
    });  

    $('#buildings_vol_excess_yn #1').click(function() {
      $('#buildings_vol_excess').css('display','none');
    });
    $('#buildings_vol_excess_yn #2').click(function() {
      $('#buildings_vol_excess').css('display','block');
    });


    $('#buildings_ncd_yn #1').click(function() {
      $('#buildings_ncd').css('display','block');
    });
    $('#buildings_ncd_yn #2').click(function() {
      $('#buildings_ncd').css('display','none');
    });	 



    
    $('#prev_ins_name').on('change', function() {
      const selectedValue = $(this).val();
      const matchingValues = [''];

      if (!matchingValues.includes(selectedValue)) {
        $('#prev_ins').css('display', 'block');
      } else {
        $('#prev_ins').css('display', 'none');
      }
    });
	 
    $('#buildings_prev_ins_name').on('change', function() {
      const selectedValue = $(this).val();
      const matchingValues = [''];

      if (!matchingValues.includes(selectedValue)) {
        $('#buildings_prev_ins').css('display', 'block');
      } else {
        $('#buildings_prev_ins').css('display', 'none');
      }
    });
    
    
    
    $('#external_lock_yn #1').click(function() {
      $('#external_lock').css('display','block');
    });
    $('#external_lock_yn #2').click(function() {
      $('#external_lock').css('display','none');
    }); 
    
    $('#window_lock_yn #1').click(function() {
      $('#window_lock').css('display','block');
    });
    $('#window_lock_yn #2').click(function() {
      $('#window_lock').css('display','none');
    });
    
    $('#smoke_detectors_yn #1').click(function() {
      $('#smoke_detectors').css('display','block');
    });
    $('#smoke_detectors_yn #2').click(function() {
      $('#smoke_detectors').css('display','none');
    });
    
    $('#safe_yn #1').click(function() {
      $('#safe').css('display','block');
    });
    $('#safe_yn #2').click(function() {
      $('#safe').css('display','none');
    });
    
    
    
	 $('#alarm_type_select').on('change', function() {
    const selectedValue = $(this).val();
     if (['nacoss/ssaib'].includes(selectedValue)) {
    	$('#alarm').css('display','block');
      $('#maintenance_contract').css('display','block');
    } else if (['no_alarm_fitted'].includes(selectedValue)) {
      $('#alarm').css('display','none');
      $('#maintenance_contract').css('display','none'); 
    } else {
      $('#alarm').css('display','block'); 
      $('#maintenance_contract').css('display','none'); 
    }
  });



    $('#type_of_heating').on('change', function() {
    const selectedValue = $(this).val();
    if (['gas_fired_central_heating'].includes(selectedValue)) {
      $('#boiler_types').css('display','block');
    } else {
      $('#boiler_types').css('display','none'); 
    }
  });

	
    
    //Open Blades
    $('#open_tel_blade').click(function() {
      $('.blade_overlay').css('display','block');
      $('.blade_flyout').css('display','flex').css('right','0');
    });
    $('.close_blade').click(function() {
      $('.blade_overlay').css('display','none');
      $('.blade_flyout').css('right','-575px').css('display','flex');
    });

	
    
    //Update Radio button names
    // Loop through each group of radio buttons
	$('.radio_button_choices').each(function(index) {
	  var groupName = 'option_group_' + index; // unique name per group
	
	  // Find all radio inputs with name="Option" inside this group and rename them
	  $(this).find('input[type=radio][name="Option"]').each(function() {
	    $(this).attr('name', groupName);
	  });
	});




    
    
    
    $('#prop_type').on('change', function() {
    const selectedValue = $(this).val();
    if (['above_second_floor_flat_conversion', 'above_second_floor_purpose_built_flat', 'basement_flat_conversion', 'basement_purpose_built_flat', 'first_floor_flat_conversion', 'first_floor_purpose_built_flat', 'flats_(conversion_to_existing_dwelling)', 'ground_floor_flat_conversion', 'ground_floor_purpose_built_flat', 'purpose_built_flat/apartment', 'second_floor_flat_conversion', 'second_floor_purpose_built_flat', 'service_flat_within_employers_premises', 'top_floor_flat_conversion', 'top_floor_purpose_built_flat', 'detached_maisonette', 'end_terraced_maisonette', 'maisonette' , 'maisonette_conversion', 'maisonette_purpose_built', 'mid-terraced_maisonette', 'semi_detached_maisonette'].includes(selectedValue)) {
      $('#flat_extra').css('display','block');
    } else {
      $('#flat_extra').css('display','none'); 
    }
  });
  
  
  $('#occupancy_list').on('change', function() {
    const selectedValue = $(this).val();
    if (['let_-_unemployed_but_not_benefit_assisted', 'let_-_students', 'let_-_retired_persons_only', 'let_-_professional', 'let_-_mixed_tenant_types', 'let_-_family_members_only', 'let_-_benefits_assisted', 'let_-_asylum_seekers'].includes(selectedValue)) {
      $('#let_occupancy').css('display','block');
      $('#holiday_home').css('display','none');
      $('#unoccupied_prop').css('display','none');	    
    } else if (['holiday_home'].includes(selectedValue)) {
      $('#holiday_home').css('display','block');
      $('#let_occupancy').css('display','none'); 
      $('#unoccupied_prop').css('display','none');
    } else if (['unoccupied_-_occupant_deceased', 'unoccupied'].includes(selectedValue)) {
      $('#unoccupied_prop').css('display','block');
      $('#let_occupancy').css('display','none'); 
      $('#holiday_home').css('display','none');
    } else {
      $('#let_occupancy').css('display','none'); 
      $('#holiday_home').css('display','none');
      $('#unoccupied_prop').css('display','none');	    
    }
  });

	 


$('#employment_type').on('change', function() {
    const selectedValue = $(this).val();
    if (['household_duties'].includes(selectedValue)) {
      $('#occ').val('');
      $('#emp_bus').val('None - Household Duties');    
    } else if (['not_employed_due_to_disability'].includes(selectedValue)) {
      $('#occ').val('Not Employed Due to Disability');
      $('#emp_bus').val('None - Not Employed Due to Disability');    
    } else if (['retired'].includes(selectedValue)) {
      $('#occ').val('Retired');
      $('#emp_bus').val('None - Retired');    
    } else if (['unemployed'].includes(selectedValue)) {
      $('#occ').val('Unemployed');
      $('#emp_bus').val('None - Unemployed');   
      $('#unemployed').css('display','block'); 	    
    } else {
      $('#unemployed').css('display','none'); 
      $('#occ').val('');
      $('#emp_bus').val('');   	    
    }
  });	


       // Hide/show Above Commercial Premises response
    $('#rem_acc_yn #1').click(function() {
      $('#rem_acc').css('display','none');
    });
    $('#rem_acc_yn #2').click(function() {
      $('#rem_acc').css('display','block');
    });
    
    $('#rem_acc_yn_too #1').click(function() {
      $('#rem_acc').css('display','none');
    });
    $('#rem_acc_yn_too #2').click(function() {
      $('#rem_acc').css('display','block');
    });
    
    
    // Hide/show Cracks Question
    $('#cracks_yn #1').click(function() {
      $('#cracks').css('display','block');
    });
    $('#cracks_yn #2').click(function() {
      $('#cracks').css('display','none');
    });
    
    
    // Hide/show Cracks Question
    $('#cracks_yn #1').click(function() {
      $('#cracks').css('display','block');
    });
    $('#cracks_yn #2').click(function() {
      $('#cracks').css('display','none');
    });
  
  
	  $('#landslip_yn #1').click(function() {
      $('#landslip').css('display','block');
    });
    $('#landslip_yn #2').click(function() {
      $('#landslip').css('display','none');
    });    
    
    $('#trees_yn #1').click(function() {
      $('#trees').css('display','block');
    });
    $('#trees_yn #2').click(function() {
      $('#trees').css('display','none');
    });  
    
    $('#self_cont_yn #1').click(function() {
      $('#self_cont').css('display','none');
    });
    $('#self_cont_yn #2').click(function() {
      $('#self_cont').css('display','block');
    });  
    
    $('#bus_name_yn #1').click(function() {
      $('#bus_name').css('display','block');
      $('#bus_details').css('display','block');
    });
    $('#bus_name_yn #2').click(function() {
      $('#bus_name').css('display','none');
      $('#bus_details').css('display','none');
    });  
    
    $('#bus_prem_type_yn #1').click(function() {
      $('#bus_prem_type').css('display','block');
    });
    $('#bus_prem_type_yn #2').click(function() {
      $('#bus_prem_type').css('display','none');
    });  
    
    $('#client_visits_yn #1').click(function() {
      $('#client_visits').css('display','block');
    });
    $('#client_visits_yn #2').click(function() {
      $('#client_visits').css('display','none');
    }); 
    
    $('#eqip_on_prem_yn #1').click(function() {
      $('#eqip_on_prem').css('display','block');
    });
    $('#eqip_on_prem_yn #2').click(function() {
      $('#eqip_on_prem').css('display','none');
    }); 
    
    $('#eqip_covered_yn #1').click(function() {
      $('#eqip_covered').css('display','block');
    });
    $('#eqip_covered_yn #2').click(function() {
      $('#eqip_covered').css('display','none');
    }); 
    
    $('#stock_on_prem_yn #1').click(function() {
      $('#stock_on_prem').css('display','block');
    });
    $('#stock_on_prem_yn #2').click(function() {
      $('#stock_on_prem').css('display','none');
    }); 
    
    $('#wall_constr_yn #1').click(function() {
      $('#wall_constr').css('display','block');
      $('#wall_constr_other').css('display','none');
    });
    $('#wall_constr_yn #2').click(function() {
      $('#wall_constr').css('display','none');
      $('#wall_constr_other').css('display','block');
    }); 
    
    

    
	
	$('#flat_roof_yn #1').click(function() {
      $('#flat_roof').css('display','block');
    });
    $('#flat_roof_yn #2').click(function() {
      $('#flat_roof').css('display','none');
    });
    
	$('#felt_roof_yn #1').click(function() {
      $('#felt_roof').css('display','block');
    });
    $('#felt_roof_yn #2').click(function() {
      $('#felt_roof').css('display','none');
    });
	
    $('#arch_int_yn #1').click(function() {
      $('#arch_int').css('display','block');
    });
    $('#arch_int_yn #2').click(function() {
      $('#arch_int').css('display','none');
    });
    
		$('#extension_details_yn #1').click(function() {
      $('#extension_details').css('display','block');
    });
    $('#extension_details_yn #2').click(function() {
      $('#extension_details').css('display','none');
    });
    
    $('#roof_constr_yn #1').click(function() {
      $('#roof_constr').css('display','block');
      $('#roof_constr_other').css('display','none');
    });
    $('#roof_constr_yn #2').click(function() {
      $('#roof_constr').css('display','none');
      $('#roof_constr_other').css('display','block');
    }); 

	
 




  function linkFieldPairs(pairs) {
    pairs.forEach(function (pair) {
      const sourceId = pair.source;
      const targetId = pair.target;

      $('#' + sourceId).on('input change', function () {
        let value = $(this).val();
        let $target = $('#' + targetId);

        if ($target.is('select')) {
          if ($target.find('option[value="' + value + '"]').length) {
            $target.val(value);
          } else {
            $target.append(new Option(value, value)).val(value);
          }
        } else {
          $target.val(value);
        }
      });
    });
  }

    linkFieldPairs([
      { source: 'title_options_response_a', target: 'title_options_response_b' },
      { source: 'forename_a', target: 'forename_b' },
      { source: 'surname_a', target: 'surname_b' },
      { source: 'dob_dd_a', target: 'dob_dd_b' },
      { source: 'dob_mm_a', target: 'dob_mm_b' },
      { source: 'dob_yyyy_a', target: 'dob_yyyy_b' }
    ]);


  $('input[custom_attribute="disabled"]').addClass('disabled_field');
  $('input[custom_attribute="disabled"], select[custom_attribute="disabled"], textarea[custom_attribute="disabled"], button[custom_attribute="disabled"]').attr('disabled', 'disabled');

	$('#client_ref').val('THE/B/01011975/0001');




	 function showAgeResult(text) {
        // If the #ageResult div doesn't exist yet, create it and insert after year input
        if ($('#ageResult').length === 0) {
          $('<div id="ageResult" class="label_text"></div>').insertAfter('#dob_yyyy_b');
        }
        $('#ageResult').text(text);
      }

      function calculateAge() {
        const day = parseInt($('#dob_dd_b').val(), 10);
        const month = parseInt($('#dob_mm_b').val(), 10) - 1;
        const year = parseInt($('#dob_yyyy_b').val(), 10);
        const currentYear = new Date().getFullYear();

        if (!day || !month || !year || year < 1000 || year > currentYear) {
          showAgeResult("Enter a valid date.");
          return;
        }

        const dob = new Date(year, month, day);
        const today = new Date();

        if (isNaN(dob.getTime()) || dob > today) {
          showAgeResult("Please enter a valid date.");
          return;
        }

        let age = today.getFullYear() - dob.getFullYear();
        const m = today.getMonth() - dob.getMonth();

        if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
          age--;
        }

        showAgeResult(`Age: ${age} yrs`);
      }

      $('#dob_yyyy_b').on('input', function() {
        const day = $('#dob_dd_b').val();
        const month = $('#dob_mm_b').val();
        const year = $('#dob_yyyy_b').val();

        if (day.length === 2 && month.length === 2 && year.length === 4) {
          calculateAge();
        }
      });



  
});

