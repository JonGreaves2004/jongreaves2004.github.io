var groupedOptions = {
  heating_options: [
    { value: 'other', text: 'Other' },
    { value: 'solid_fuel', text: 'Solid Fuel' },
    { value: 'oil_fired_central_heating', text: 'Oil Fired Central Heating' },
    { value: 'gas_fired_central_heating', text: 'Gas Fired Central Heating' },
    { value: 'electric_storage_heating', text: 'Electric Storage Heating' }
  ],
  title_options: [
    { value: 'admiral', text: 'Admiral' },
    { value: 'air_chief_marshall', text: 'Air Chief Marshall' },
    { value: 'air_commodore', text: 'Air Commodore' },
    { value: 'air_marshall', text: 'Air Marshall' },
    { value: 'air_vice_marshall', text: 'Air Vice Marshall' },
    { value: 'airman', text: 'Airman' },
    { value: 'baron', text: 'Baron' },
    { value: 'baroness', text: 'Baroness' },
    { value: 'bean', text: 'Bean' },
    { value: 'bombardier', text: 'Bombardier' },
    { value: 'brigadier', text: 'Brigadier' },
    { value: 'brother', text: 'Brother' },
    { value: 'canon', text: 'Canon' },
    { value: 'captain', text: 'Captain' },
    { value: 'cardinal', text: 'Cardinal' },
    { value: 'chief', text: 'Chief' },
    { value: 'citizen', text: 'Citizen' },
    { value: 'colonel', text: 'Colonel' },
    { value: 'colour_sergeant', text: 'Colour Sergeant' },
    { value: 'commander', text: 'Commander' },
    { value: 'commodore', text: 'Commodore' },
    { value: 'corporal', text: 'Corporal' },
    { value: 'councillor', text: 'Councillor' },
    { value: 'count', text: 'Count' },
    { value: 'countess', text: 'Countess' },
    { value: 'dame', text: 'Dame' },
    { value: 'dean', text: 'Dean' },
    { value: 'doctor', text: 'Doctor' },
    { value: 'duchess', text: 'Duchess' },
    { value: 'estate_of', text: 'Estate Of' },
    { value: 'executor(s)_of', text: 'Executor(s) of' },
    { value: 'father', text: 'Father' },
    { value: 'field_marshall', text: 'Field Marshall' },
    { value: 'flight_lieutenant', text: 'Flight Lieutenant' },
    { value: 'flight_officer', text: 'Flight Officer' },
    { value: 'flight_sergeant', text: 'Flight Sergeant' },
    { value: 'general', text: 'General' },
    { value: 'group_captain', text: 'Group Captain' },
    { value: 'gunner', text: 'Gunner' },
    { value: 'hrh', text: 'HRH' },
    { value: 'her_excellency', text: 'Her Excellency' },
    { value: 'his_excellency', text: 'His Excellency' },
    { value: 'honourable', text: 'Honourable' },
    { value: 'judge', text: 'Judge' },
    { value: 'lady', text: 'Lady' },
    { value: 'lance_bombardier', text: 'Lance Bombardier' },
    { value: 'lance_corporal', text: 'Lance Corporal' },
    { value: 'lieutenant', text: 'Lieutenant' },
    { value: 'lieutenant_colonel', text: 'Lieutenant Colonel' },
    { value: 'lieutenant_commander', text: 'Lieutenant Commander' },
    { value: 'lieutenant_general', text: 'Lieutenant General' },
    { value: 'lord', text: 'Lord' },
    { value: 'madam', text: 'Madam' },
    { value: 'major', text: 'Major' },
    { value: 'major_general', text: 'Major General' },
    { value: 'marquis', text: 'Marquis' },
    { value: 'marshal_of_the_raf', text: 'Marshal of the RAF' },
    { value: 'master', text: 'Master' },
    { value: 'master_sergeant', text: 'Master Sergeant' },
    { value: 'miss', text: 'Miss' },
    { value: 'mother', text: 'Mother' },
    { value: 'mr', text: 'Mr' },
    { value: 'mr_justice', text: 'Mr Justice' },
    { value: 'mrs', text: 'Mrs' },
    { value: 'ms', text: 'Ms' },
    { value: 'mx', text: 'Mx' },
    { value: 'pilot_officer', text: 'Pilot Officer' },
    { value: 'prince', text: 'Prince' },
    { value: 'princess', text: 'Princess' },
    { value: 'private', text: 'Private' },
    { value: 'professor', text: 'Professor' },
    { value: 'provost', text: 'Provost' },
    { value: 'rabbi', text: 'Rabbi' },
    { value: 'rear_admiral', text: 'Rear Admiral' },
    { value: 'regimental_sgt_major', text: 'Regimental Sgt Major' },
    { value: 'reverend', text: 'Reverend' },
    { value: 'reverend_doctor', text: 'Reverend Doctor' },
    { value: 'right_reverend', text: 'Right Reverend' },
    { value: 'sachem', text: 'Sachem' },
    { value: 'select', text: 'Select' },
    { value: 'sergeant', text: 'Sergeant' },
    { value: 'sheikh', text: 'Sheikh' },
    { value: 'sheriff', text: 'Sheriff' },
    { value: 'sir', text: 'Sir' },
    { value: 'sister', text: 'Sister' },
    { value: 'squadron_leader', text: 'Squadron Leader' },
    { value: 'staff_sergeant', text: 'Staff Sergeant' },
    { value: 'surgeon_captain', text: 'Surgeon Captain' },
    { value: 'the_duke_of', text: 'The Duke of' },
    { value: 'the_earl_of', text: 'The Earl of' },
    { value: 'the_honourable_lady', text: 'The Honourable Lady' },
    { value: 'the_honourable_miss', text: 'The Honourable Miss' },
    { value: 'the_honourable_mrs', text: 'The Honourable Mrs' },
    { value: 'the_honourable_sir', text: 'The Honourable Sir' },
    { value: 'the_marquess_of', text: 'The Marquess of' },
    { value: 'the_most_reverend', text: 'The Most Reverend' },
    { value: 'the_right_honourable', text: 'The Right Honourable' },
    { value: 'the_venerable', text: 'The Venerable' },
    { value: 'trustees_of', text: 'Trustees Of' }
  ],
  cc_consent_list: [
    { value: 'yes', text: 'Yes' },
    { value: 'not_asked', text: 'Not Asked' },
    { value: 'no', text: 'No' }
  ],
  prop_addr_options: [
    { value: 'other', text: 'Other' },
    { value: 'unsited_caravan', text: 'Unsited Caravan' },
    { value: 'unknown', text: 'Unknown' },
    { value: 'sited_caravan', text: 'Sited Caravan' },
    { value: 'away_from_home', text: 'Away From Home' },
    { value: 'licensed_premises', text: 'Licensed Premises' },
    { value: 'business_premises', text: 'Business Premises' },
    { value: 'flat', text: 'Flat' },
    { value: 'house', text: 'House' },
    { value: 'boat', text: 'Boat' },
    { value: 'barracks', text: 'Barracks' }
  ],
  prop_dwell_status_options: [
    { value: 'owned_on_mortgage_-_let_furnished', text: 'Owned On Mortgage - Let Furnished' },
    { value: 'tenant', text: 'Tenant' },
    { value: 'rented_from_private_landlord_-_unfurnished', text: 'Rented From Private Landlord - Unfurnished' },
    { value: 'rented_from_private_landlord_-_furnished', text: 'Rented From Private Landlord - Furnished' },
    { value: 'rented_from_local_authority_-_furnished', text: 'Rented From Local Authority - Furnished' },
    { value: 'rented_from_local_authority_-_unfurnished', text: 'Rented From Local Authority - Unfurnished' },
    { value: 'owned_on_mortgage_-_home_owner', text: 'Owned On Mortgage - Home Owner' },
    { value: 'owned_on_mortgage_-_let_unfurnished', text: 'Owned On Mortgage - Let Unfurnished' },
    { value: 'owned_by_proposer_-_home_owner', text: 'Owned By Proposer - Home Owner' },
    { value: 'owned_by_relatives', text: 'Owned by Relatives' },
    { value: 'owned_by_proposer_-_let_unfurnished', text: 'Owned By Proposer - Let Unfurnished' },
    { value: 'owned_by_proposer_-_let_furnished', text: 'Owned By Proposer - Let Furnished' },
    { value: 'living_with_parents', text: 'Living with parents' },
    { value: 'other', text: 'Other' },
    { value: 'homeowner', text: 'Homeowner' }
  ],
  tel_type_options: [
    { value: 'work', text: 'Work' },
    { value: 'unknown', text: 'Unknown' },
    { value: 'other', text: 'Other' },
    { value: 'mobile', text: 'Mobile' },
    { value: 'international', text: 'International' },
    { value: 'home', text: 'Home' },
    { value: 'fax', text: 'Fax' },
    { value: 'car', text: 'Car' },
    { value: 'business', text: 'Business' }
  ],
  marriage_status_options: [
    { value: 'widowed', text: 'Widowed' },
    { value: 'single', text: 'Single' },
    { value: 'separated', text: 'Separated' },
    { value: 'partnered_-_civil', text: 'Partnered - Civil' },
    { value: 'partnered', text: 'Partnered' },
    { value: 'married_-_common_law', text: 'Married - Common Law' },
    { value: 'married', text: 'Married' },
    { value: 'divorced', text: 'Divorced' }
  ],
  property_types: [
    { value: 'above_second_floor_flat_conversion', text: 'Above Second Floor Flat Conversion' },
    { value: 'above_second_floor_purpose_built_flat', text: 'Above Second Floor Purpose Built Flat' },
    { value: 'back_to_back_terrace', text: 'Back To Back Terrace' },
    { value: 'basement_flat_conversion', text: 'Basement Flat Conversion' },
    { value: 'basement_purpose_built_flat', text: 'Basement Purpose Built Flat' },
    { value: 'bay_fronted_detached_house', text: 'Bay Fronted Detached House' },
    { value: 'bay_fronted_end_terrace_house', text: 'Bay Fronted End Terrace House' },
    { value: 'bay_fronted_mid-terraced_house', text: 'Bay Fronted Mid-Terraced House' },
    { value: 'bay_fronted_semi-detached_house', text: 'Bay Fronted Semi-Detached House' },
    { value: 'building_under_construction', text: 'Building Under Construction' },
    { value: 'chalet', text: 'Chalet' },
    { value: 'detached_bungalow', text: 'Detached Bungalow' },
    { value: 'detached_house', text: 'Detached House' },
    { value: 'detached_house_(barn_conversion)', text: 'Detached House (Barn Conversion)' },
    { value: 'detached_house_(church_conversion)', text: 'Detached House (Church Conversion)' },
    { value: 'detached_house_(lighthouse_conversion)', text: 'Detached House (Lighthouse Conversion)' },
    { value: 'detached_maisonette', text: 'Detached Maisonette' },
    { value: 'detached_town_house', text: 'Detached Town House' },
    { value: 'dorma_-_detached', text: 'Dorma - Detached' },
    { value: 'dorma_-_semi-detached', text: 'Dorma - Semi-Detached' },
    { value: 'dorma_-_terrace', text: 'Dorma - Terrace' },
    { value: 'end_terraced_bungalow', text: 'End Terraced Bungalow' },
    { value: 'end_terraced_house', text: 'End Terraced House' },
    { value: 'end_terraced_house_(barn_conversion)', text: 'End Terraced House (Barn Conversion)' },
    { value: 'end_terraced_maisonette', text: 'End Terraced Maisonette' },
    { value: 'end_town_house', text: 'End Town House' },
    { value: 'first_floor_flat_conversion', text: 'First Floor Flat Conversion' },
    { value: 'first_floor_purpose_built_flat', text: 'First Floor Purpose Built Flat' },
    { value: 'flats_(conversion_to_existing_dwelling)', text: 'Flats (Conversion To Existing Dwelling)' },
    { value: 'ground_floor_flat_conversion', text: 'Ground Floor Flat Conversion' },
    { value: 'ground_floor_purpose_built_flat', text: 'Ground Floor Purpose Built Flat' },
    { value: 'halls_of_residence', text: 'Halls of Residence' },
    { value: 'house_boat', text: 'House Boat' },
    { value: 'licensed_premises', text: 'Licensed Premises' },
    { value: 'link_detached', text: 'Link Detached' },
    { value: 'link_detached', text: 'Link Detached' },
    { value: 'link_semi_-_detached', text: 'Link Semi - Detached' },
    { value: 'maisonette', text: 'Maisonette' },
    { value: 'maisonette_conversion', text: 'Maisonette Conversion' },
    { value: 'maisonette_purpose_built', text: 'Maisonette Purpose Built' },
    { value: 'mansion', text: 'Mansion' },
    { value: 'mid_town_house', text: 'Mid Town House' },
    { value: 'mid-terraced_bungalow', text: 'Mid-Terraced Bungalow' },
    { value: 'mid-terraced_house', text: 'Mid-Terraced House' },
    { value: 'mid-terraced_house_(barn_conversion)', text: 'Mid-Terraced House (Barn Conversion)' },
    { value: 'mid-terraced_maisonette', text: 'Mid-Terraced Maisonette' },
    { value: 'mobile_home', text: 'Mobile Home' },
    { value: 'park_home', text: 'Park Home' },
    { value: 'purpose_built_flat/apartment', text: 'Purpose Built Flat/Apartment' },
    { value: 'quasi_semi_-_detached', text: 'Quasi Semi - Detached' },
    { value: 'residential_caravan', text: 'Residential Caravan' },
    { value: 'rooms', text: 'Rooms' },
    { value: 'second_floor_flat_conversion', text: 'Second Floor Flat Conversion' },
    { value: 'second_floor_purpose_built_flat', text: 'Second Floor Purpose Built Flat' },
    { value: 'semi_detached_maisonette', text: 'Semi Detached Maisonette' },
    { value: 'semi-detached_bungalow', text: 'Semi-Detached Bungalow' },
    { value: 'semi-detached_house', text: 'Semi-Detached House' },
    { value: 'semi-detached_house_(barn_conversion)', text: 'Semi-Detached House (Barn Conversion)' },
    { value: 'service_flat_within_employers_premises', text: 'Service Flat Within Employers Premises' },
    { value: 'show_house', text: 'Show House' },
    { value: 'top_floor_flat_conversion', text: 'Top Floor Flat Conversion' },
    { value: 'top_floor_purpose_built_flat', text: 'Top Floor Purpose Built Flat' },
    { value: 'town_house', text: 'Town House' },
    { value: 'unknown', text: 'Unknown' },
    { value: 'unspecified_private_dwelling', text: 'Unspecified Private Dwelling' },
    { value: 'zz_-_not_covered_by_any_other_item_on_the_list', text: 'ZZ - Not Covered By Any Other Item On The List' }
  ],
  ownership_options: [
    { value: 'owned_by_proposer_-_benefit_assisted_let', text: 'Owned By Proposer - Benefit Assisted Let' },
    { value: 'owned_by_proposer_-_commercial_let', text: 'Owned By Proposer - Commercial Let' },
    { value: 'owned_by_proposer_-_professional_let', text: 'Owned By Proposer - Professional Let' },
    { value: 'owned_by_proposer_-_rent_to_friends_and_family', text: 'Owned By Proposer - Rent to Friends And Family' },
    { value: 'owned_by_proposer_-_student_let', text: 'Owned By Proposer - Student Let' },
    { value: 'owned_on_a_mortgage_by_proposer_-_lodgers', text: 'Owned On A Mortgage By Proposer - Lodgers' },
    { value: 'owned_on_mortgage_by_proposer_-_let_furnished', text: 'Owned On Mortgage By Proposer - Let Furnished' },
    { value: 'owned_on_mortgage_by_proposer_-_let_unfurnished', text: 'Owned On Mortgage By Proposer - Let Unfurnished' },
    { value: 'owned_on_mortgage_by_proposer_-_not_let', text: 'Owned On Mortgage By Proposer - Not Let' },
    { value: 'owned_on_mortgage_by_proposer_-_sharing', text: 'Owned On Mortgage By Proposer - Sharing' },
    { value: 'owned_on_mortgage_by_proposer_-_sometimes_let_furnished', text: 'Owned On Mortgage By Proposer - Sometimes Let Furnished' },
    { value: 'owned_on_mortgage_by_proposer_-_sometimes_let_unfurnished', text: 'Owned On Mortgage By Proposer - Sometimes Let Unfurnished' },
    { value: 'owned_outright_by_proposer_-_let_furnished', text: 'Owned Outright By Proposer - Let Furnished' },
    { value: 'owned_outright_by_proposer_-_let_unfurnished', text: 'Owned Outright By Proposer - Let Unfurnished' },
    { value: 'owned_outright_by_proposer_-_lodgers', text: 'Owned Outright By Proposer - Lodgers' },
    { value: 'owned_outright_by_proposer_-_not_let', text: 'Owned Outright By Proposer - Not Let' },
    { value: 'owned_outright_by_proposer_-_sharing', text: 'Owned Outright By Proposer - Sharing' },
    { value: 'owned_outright_by_proposer_-_sometimes_let_furnished', text: 'Owned Outright By Proposer - Sometimes Let Furnished' },
    { value: 'owned_outright_by_proposer_-_sometimes_let_unfurnished', text: 'Owned Outright By Proposer - Sometimes Let Unfurnished' },
    { value: 'rented_from_housing_association_-_sharing', text: 'Rented From Housing Association - Sharing' },
    { value: 'rented_from_local_authority_-_furnished', text: 'Rented From Local Authority - Furnished' },
    { value: 'rented_from_local_authority_-_sharing', text: 'Rented From Local Authority - Sharing' },
    { value: 'rented_from_local_authority_-_unfurnished', text: 'Rented From Local Authority - Unfurnished' },
    { value: 'rented_from_private_landlord_-_furnished', text: 'Rented From Private Landlord - Furnished' },
    { value: 'rented_from_private_landlord_-_sharing', text: 'Rented From Private Landlord - Sharing' },
    { value: 'rented_from_private_landlord_-_unfurnished', text: 'Rented From Private Landlord - Unfurnished' },
    { value: 'tied_occupancy_-_furnished', text: 'Tied Occupancy - Furnished' },
    { value: 'tied_occupancy_-_unfurnished', text: 'Tied Occupancy - Unfurnished' },
    { value: 'zz_-_not_covered_by_any_other_item_on_the_list', text: 'ZZ - Not Covered By Any Other Item On The List' }
  ],
  boiler_type_options: [
    { value: 'combination', text: 'Combination' },
    { value: 'conventional_high_pressure', text: 'Conventional High Pressure' },
    { value: 'conventional_low_pressure', text: 'Conventional Low Pressure' }
  ],
  occupancy_status_options: [
    { value: 'weekend_home', text: 'Weekend Home' },
    { value: 'weekday_home', text: 'Weekday Home' },
    { value: 'unoccupied_-_occupant_deceased', text: 'Unoccupied - Occupant Deceased' },
    { value: 'unoccupied', text: 'Unoccupied' },
    { value: 'secondary_residence', text: 'Secondary Residence' },
    { value: 'primary_residence', text: 'Primary Residence' },
    { value: 'permanent_home', text: 'Permanent Home' },
    { value: 'other', text: 'Other' },
    { value: 'multi-unit_(3_dwellings)_premises,_proposer_&/or_family_reside', text: 'Multi-Unit (3 Dwellings) Premises, Proposer &/or Family Reside' },
    { value: 'multi-unit_(2_dwellings)_premises,_proposer_&/or_family_reside', text: 'Multi-Unit (2 Dwellings) Premises, Proposer &/or Family Reside' },
    { value: 'let_-_unemployed_but_not_benefit_assisted', text: 'Let - Unemployed but not Benefit Assisted' },
    { value: 'let_-_students', text: 'Let - Students' },
    { value: 'let_-_retired_persons_only', text: 'Let - Retired Persons Only' },
    { value: 'let_-_professional', text: 'Let - Professional' },
    { value: 'let_-_mixed_tenant_types', text: 'Let - Mixed Tenant Types' },
    { value: 'let_-_family_members_only', text: 'Let - Family Members Only' },
    { value: 'let_-_benefits_assisted', text: 'Let - Benefits Assisted' },
    { value: 'let_-_asylum_seekers', text: 'Let - Asylum seekers' },
    { value: 'holiday_home', text: 'Holiday Home' }
  ],
  alarm_types_options: [
    { value: 'zz_-_not_covered_by_any_other_item_on_the_list', text: 'ZZ - Not Covered By Any Other Item On The List' },
    { value: 'packnet', text: 'Packnet' },
    { value: 'no_alarm_fitted', text: 'No Alarm Fitted' },
    { value: 'nacoss/ssaib', text: 'NACOSS/SSAIB' },
    { value: 'central_station_direct_line', text: 'Central Station Direct Line' },
    { value: 'bt_redcare', text: 'BT Redcare' },
    { value: 'british_gas_alarm', text: 'British Gas Alarm' },
    { value: 'bell_only', text: 'Bell Only' },
    { value: 'audible_only', text: 'Audible Only' }
  ],
  employment_types: [
    { value: 'voluntary_work', text: 'Voluntary Work' },
    { value: 'unemployed', text: 'Unemployed' },
    { value: 'self_employed', text: 'Self Employed' },
    { value: 'retired', text: 'Retired' },
    { value: 'not_employed_due_to_disability', text: 'Not Employed Due To Disability' },
    { value: 'independent_means', text: 'Independent Means' },
    { value: 'in_full_or_part_time_education', text: 'In Full Or Part Time Education' },
    { value: 'household_duties', text: 'Household Duties' },
    { value: 'employed_(temporary)', text: 'Employed (Temporary)' },
    { value: 'employed', text: 'Employed' },
    { value: 'contractor', text: 'Contractor' },
    { value: 'company', text: 'Company' }
  ],
  type_of_bus_options: [
    { value: 'abrasive_compounds_and_cleaners_manufacturers', text: 'Abrasive Compounds And Cleaners Manufacturers' },
    { value: 'abrasive_compounds_and_cleaners_wholesalers', text: 'Abrasive Compounds And Cleaners Wholesalers' },
    { value: 'abrasive_wheel_and_powder_manufacturers', text: 'Abrasive Wheel And Powder Manufacturers' },
    { value: 'accident_investigation_services', text: 'Accident Investigation Services' },
    { value: 'accumulator/battery_manufacturing', text: 'Accumulator/Battery Manufacturing' },
    { value: 'accumulator/battery_wholesalers', text: 'Accumulator/Battery Wholesalers' },
    { value: 'acid_manufacturers', text: 'Acid Manufacturers' },
    { value: 'acoustic_consultant', text: 'Acoustic Consultant' },
    { value: 'acoustic_engineering', text: 'Acoustic Engineering' },
    { value: 'acting_(performer_actor_actress)', text: 'Acting (Performer Actor Actress)' },
    { value: 'actuary', text: 'Actuary' },
    { value: 'adhesives_manufacturers', text: 'Adhesives Manufacturers' },
    { value: 'administration', text: 'Administration' },
    { value: 'adoption_society', text: 'Adoption Society' },
    { value: 'adult_bookstore', text: 'Adult Bookstore' },
    { value: 'adult_education_centres', text: 'Adult Education Centres' },
    { value: 'adult_placement_service', text: 'Adult Placement Service' },
    { value: 'adventure_playground', text: 'Adventure Playground' },
    { value: 'advertising_agency', text: 'Advertising Agency' },
    { value: 'advertising_consultancy', text: 'Advertising Consultancy' },
    { value: 'advice_centre', text: 'Advice Centre' },
    { value: 'aerial_erecting', text: 'Aerial Erecting' },
    { value: 'aerial_manufacturing', text: 'Aerial Manufacturing' },
    { value: 'aerial_supplying', text: 'Aerial Supplying' },
    { value: 'aerial_surveying', text: 'Aerial Surveying' },
    { value: 'aerial_wholesalers', text: 'Aerial Wholesalers' },
    { value: 'aerobic_instructing', text: 'Aerobic Instructing' },
    { value: 'aeronautical_engineering', text: 'Aeronautical Engineering' },
    { value: 'aerosol_manufacturers', text: 'Aerosol Manufacturers' },
    { value: 'aerosol_warehouses', text: 'Aerosol Warehouses' },
    { value: 'agricultural_consultancy', text: 'Agricultural Consultancy' },
    { value: 'agricultural_contracting', text: 'Agricultural Contracting' },
    { value: 'agricultural_engineering', text: 'Agricultural Engineering' },
    { value: 'agricultural_equipment_manufacturers', text: 'Agricultural Equipment Manufacturers' },
    { value: 'agricultural_implements_manufacturing', text: 'Agricultural Implements Manufacturing' },
    { value: 'agricultural_implements_retailing', text: 'Agricultural Implements Retailing' },
    { value: 'agricultural_implements_wholesaling', text: 'Agricultural Implements Wholesaling' },
    { value: 'agricultural_merchant', text: 'Agricultural Merchant' },
    { value: 'agricultural_producer', text: 'Agricultural Producer' },
    { value: 'agricultural_vehicle_specialists', text: 'Agricultural Vehicle Specialists' },
    { value: 'agricultural/horticultural_machinery_manufacturer', text: 'Agricultural/Horticultural Machinery Manufacturer' },
    { value: 'agricultural/horticultural_machinery_warehousing', text: 'Agricultural/Horticultural Machinery Warehousing' },
    { value: 'agronomist', text: 'Agronomist' },
    { value: 'air_conditioning_engineering', text: 'Air Conditioning Engineering' },
    { value: 'air_conditioning_installation', text: 'Air Conditioning Installation' },
    { value: 'air_conditioning_installation_-_domestic/small_commercial_only', text: 'Air Conditioning Installation - Domestic/Small Commercial Only' },
    { value: 'air_conditioning_installation_-_large_commercial_only', text: 'Air Conditioning Installation - Large Commercial Only' },
    { value: 'air_conditioning/ventilation_manufacturers', text: 'Air Conditioning/Ventilation Manufacturers' },
    { value: 'air_conditioning/ventilation_wholesalers', text: 'Air Conditioning/Ventilation Wholesalers' },
    { value: 'air_filter_manufacturers', text: 'Air Filter Manufacturers' },
    { value: 'air_filter_wholesalers', text: 'Air Filter Wholesalers' },
    { value: 'air_receiver/compressor_manufacturers', text: 'Air Receiver/Compressor Manufacturers' },
    { value: 'air_receiver/compressor_wholesalers', text: 'Air Receiver/Compressor Wholesalers' },
    { value: 'air_traffic_control', text: 'Air Traffic Control' },
    { value: 'aircraft_design', text: 'Aircraft Design' },
    { value: 'aircraft_surveying', text: 'Aircraft Surveying' },
    { value: 'airport_authority', text: 'Airport Authority' },
    { value: 'alarm_installation', text: 'Alarm Installation' },
    { value: 'alarm_system_manufacturers', text: 'Alarm System Manufacturers' },
    { value: 'alarm_wholesalers', text: 'Alarm Wholesalers' },
    { value: 'alloy_manufacturers', text: 'Alloy Manufacturers' },
    { value: 'almshouse', text: 'Almshouse' },
    { value: 'aluminium_fabricators', text: 'Aluminium Fabricators' },
    { value: 'aluminium_goods_wholesalers', text: 'Aluminium Goods Wholesalers' },
    { value: 'aluminium_manufacturers', text: 'Aluminium Manufacturers' },
    { value: 'aluminium_stockholders', text: 'Aluminium Stockholders' },
    { value: 'amateur_dramatic_society', text: 'Amateur Dramatic Society' },
    { value: 'american_football_club', text: 'American Football Club' },
    { value: 'ammunition_-_manufacturing', text: 'Ammunition - Manufacturing' },
    { value: 'amusement_caterers', text: 'Amusement Caterers' },
    { value: 'amusement_machine_manufacturing', text: 'Amusement Machine Manufacturing' },
    { value: 'amusement_machine_manufacturing_(ex._ride_on)', text: 'Amusement Machine Manufacturing (Ex. Ride On)' },
    { value: 'amusement_machine_supplying', text: 'Amusement Machine Supplying' },
    { value: 'amusement_machine_wholesalers', text: 'Amusement Machine Wholesalers' },
    { value: 'amusement_machine_wholesalers_(ex_ride_on)', text: 'Amusement Machine Wholesalers (Ex Ride On)' },
    { value: 'amusements', text: 'Amusements' },
    { value: 'anaesthetisation', text: 'Anaesthetisation' },
    { value: 'analytical_chemist', text: 'Analytical Chemist' },
    { value: 'angling_club', text: 'Angling Club' },
    { value: 'animal_trainers', text: 'Animal Trainers' },
    { value: 'anode_manufacturers', text: 'Anode Manufacturers' },
    { value: 'anodisers', text: 'Anodisers' },
    { value: 'antique_dealing', text: 'Antique Dealing' },
    { value: 'antique_furniture_repairers', text: 'Antique Furniture Repairers' },
    { value: 'antique_furniture_retailing', text: 'Antique Furniture Retailing' },
    { value: 'antique/rare_books_dealing', text: 'Antique/Rare Books Dealing' },
    { value: 'antiques_retailing', text: 'Antiques Retailing' },
    { value: 'aquarium_manufacturers_(glass_and_plastic)', text: 'Aquarium Manufacturers (Glass And Plastic)' },
    { value: 'aquarium_manufacturers_(glass_and_wood)', text: 'Aquarium Manufacturers (Glass And Wood)' },
    { value: 'aquarium_manufacturers/wholesalers', text: 'Aquarium Manufacturers/Wholesalers' },
    { value: 'aquarium_supplier', text: 'Aquarium Supplier' },
    { value: 'arboriculture', text: 'Arboriculture' },
    { value: 'archaeologist', text: 'Archaeologist' },
    { value: 'archery_club', text: 'Archery Club' },
    { value: 'archery_equipment_manufacturers', text: 'Archery Equipment Manufacturers' },
    { value: 'archery_equipment_wholesalers', text: 'Archery Equipment Wholesalers' },
    { value: 'architectural_surveying', text: 'Architectural Surveying' },
    { value: 'archivist', text: 'Archivist' },
    { value: 'armed_services_outfitters', text: 'Armed Services Outfitters' },
    { value: 'armourer', text: 'Armourer' }
  ],
  type_of_bus_prem_options: [
    { value: 'electrical_goods_retailing_-_domestic_appliances', text: 'Electrical Goods Retailing - Domestic Appliances' },
    { value: 'electrology', text: 'Electrology' },
    { value: 'electronic_engineers', text: 'Electronic Engineers' },
    { value: 'electronic_component_manufacturers', text: 'Electronic Component Manufacturers' },
    { value: 'electronic_components_wholesalers', text: 'Electronic Components Wholesalers' },
    { value: 'electricity_industry', text: 'Electricity Industry' },
    { value: 'electricians_supplies_wholesalers', text: 'Electricians Supplies Wholesalers' },
    { value: 'electrical_valve_manufacturers', text: 'Electrical Valve Manufacturers' },
    { value: 'electrical_white_goods_warehouse', text: 'Electrical White Goods Warehouse' },
    { value: 'electrical_other_consumer_goods_manufacturers', text: 'Electrical Other Consumer Goods Manufacturers' },
    { value: 'electrical_switchgear_wholesalers', text: 'Electrical Switchgear Wholesalers' },
    { value: 'electrical_switchgear_manufacturers', text: 'Electrical Switchgear Manufacturers' },
    { value: 'electrical_goods_manufacturers_-_personal_use', text: 'Electrical Goods Manufacturers - Personal Use' },
    { value: 'electrical_other_consumer_goods_distribution', text: 'Electrical Other Consumer Goods Distribution' },
    { value: 'electrical_goods_retailing_-_white_goods', text: 'Electrical Goods Retailing - White Goods' },
    { value: 'electrical_goods_warehousing', text: 'Electrical Goods Warehousing' },
    { value: 'electrical_goods_retailing_-_hi_fi_audio_tv_etc.', text: 'Electrical Goods Retailing - HI FI Audio TV etc.' },
    { value: 'electrical_goods_retailing', text: 'Electrical Goods Retailing' },
    { value: 'electrical_goods_manufacturers_-_other', text: 'Electrical Goods Manufacturers - Other' },
    { value: 'electrical_goods_hiring_-_hi_fi_audio_tv_etc.', text: 'Electrical Goods Hiring - HI FI Audio TV etc.' },
    { value: 'electrical_goods_distribution_-_personal_use', text: 'Electrical Goods Distribution - Personal Use' },
    { value: 'electrical_goods_hiring_-_domestic_appliances', text: 'Electrical Goods Hiring - Domestic Appliances' },
    { value: 'electrical_goods_distributor_-_other', text: 'Electrical Goods Distributor - Other' },
    { value: 'electrical_goods_consultancy', text: 'Electrical Goods Consultancy' },
    { value: 'electrical_goods_(domestic)_repair', text: 'Electrical Goods (Domestic) Repair' },
    { value: 'electrical_engineers/repairers', text: 'Electrical Engineers/Repairers' },
    { value: 'electrical_element_manufacturers', text: 'Electrical Element Manufacturers' },
    { value: 'electrical_control_gear_wholesalers', text: 'Electrical Control Gear Wholesalers' },
    { value: 'electrical_control_gear_manufacturers', text: 'Electrical Control Gear Manufacturers' },
    { value: 'electrical_contractor_-_large_commercial_only', text: 'Electrical Contractor - Large Commercial Only' },
    { value: 'electrical_contractor_supplier_warehousing', text: 'Electrical Contractor Supplier Warehousing' },
    { value: 'electrical_contractor_-_domestic/small_commercial_only', text: 'Electrical Contractor - Domestic/Small Commercial Only' },
    { value: 'electrical_contractor', text: 'Electrical Contractor' },
    { value: 'electrical_contractor_(excl_aerial_erecting)', text: 'Electrical Contractor (Excl Aerial Erecting)' },
    { value: 'electrical_components_wholesalers', text: 'Electrical Components Wholesalers' },
    { value: 'electrical_components_warehouse', text: 'Electrical Components Warehouse' },
    { value: 'electrical_components_supplier', text: 'Electrical Components Supplier' },
    { value: 'electrical_component_manufacturers', text: 'Electrical Component Manufacturers' },
    { value: 'electrical_brown_goods_warehouse', text: 'Electrical Brown Goods Warehouse' },
    { value: 'electrical_appliance_wholesalers_-_domestic_white_goods', text: 'Electrical Appliance Wholesalers - Domestic White Goods' },
    { value: 'electrical_appliance_wholesalers_-_domestic_brown_goods', text: 'Electrical Appliance Wholesalers - Domestic Brown Goods' },
    { value: 'electrical_appliance_servicing', text: 'Electrical Appliance Servicing' },
    { value: 'electrical_appliance_manufacturing_-_industrial_use', text: 'Electrical Appliance Manufacturing - Industrial use' },
    { value: 'electrical_appliance_manufacturing_-_domestic_white_goods', text: 'Electrical Appliance Manufacturing - Domestic White Goods' },
    { value: 'electrical_appliance_manufacturing_-_domestic_brown_goods', text: 'Electrical Appliance Manufacturing - Domestic Brown Goods' },
    { value: 'electrical_appliance_manufacturing', text: 'Electrical Appliance Manufacturing' },
    { value: 'electrical_accessories_manufacturers_e.g._plugs', text: 'Electrical Accessories Manufacturers e.g. Plugs' },
    { value: 'electric_tools_manufacturers', text: 'Electric Tools Manufacturers' },
    { value: 'electric_tool_distributors', text: 'Electric Tool Distributors' },
    { value: 'electric_tool_retailers', text: 'Electric Tool Retailers' },
    { value: 'electric_motor_wholesalers', text: 'Electric Motor Wholesalers' },
    { value: 'electric_motor_rewinders', text: 'Electric Motor Rewinders' },
    { value: 'elastic_manufacturers', text: 'Elastic Manufacturers' },
    { value: 'electric_motor_manufacturers', text: 'Electric Motor Manufacturers' },
    { value: 'electric_motor_dynamo_and_generator_wholesalers', text: 'Electric Motor Dynamo And Generator Wholesalers' },
    { value: 'electric_generators/turbines/transformers_wholesalers', text: 'Electric Generators/Turbines/Transformers Wholesalers' },
    { value: 'eggs_wholesalers', text: 'Eggs Wholesalers' },
    { value: 'electric_generators/turbines/transformers_manufacturers', text: 'Electric Generators/Turbines/Transformers Manufacturers' },
    { value: 'electric_blanket_wholesalers', text: 'Electric Blanket Wholesalers' },
    { value: 'electric_cable_manufacturers', text: 'Electric Cable Manufacturers' },
    { value: 'electric_blanket_manufacturers', text: 'Electric Blanket Manufacturers' },
    { value: 'elastic_goods_manufacturers', text: 'Elastic Goods Manufacturers' },
    { value: 'egg_packers/graders', text: 'Egg Packers/Graders' },
    { value: 'egg_merchant', text: 'Egg Merchant' },
    { value: 'effluent_disposal', text: 'Effluent Disposal' },
    { value: 'educational_supplies_wholesalers', text: 'Educational Supplies Wholesalers' },
    { value: 'education_advisory_service', text: 'Education Advisory Service' },
    { value: 'earthenware_(domestic)_manufacturers', text: 'Earthenware (Domestic) Manufacturers' },
    { value: 'education_-_state', text: 'Education - State' },
    { value: 'education_-_private', text: 'Education - Private' },
    { value: 'education', text: 'Education' },
    { value: 'editorial_consultancy', text: 'Editorial Consultancy' },
    { value: 'ecology', text: 'Ecology' },
    { value: 'earthenware_(domestic)_wholesalers', text: 'Earthenware (Domestic) Wholesalers' },
    { value: 'earth_removing', text: 'Earth Removing' },
    { value: 'dyer', text: 'Dyer' },
    { value: 'dye_manufacturers', text: 'Dye Manufacturers' },
    { value: 'ductwork_installation', text: 'Ductwork Installation' },
    { value: 'dry_stone_wall_construction/repair', text: 'Dry Stone Wall Construction/Repair' },
    { value: 'ducting_and_ductwork_manufacturers', text: 'Ducting and Ductwork Manufacturers' },
    { value: 'dry_rot_control_services', text: 'Dry Rot Control Services' },
    { value: 'dry_lining', text: 'Dry Lining' },
    { value: 'dry_cleaning_and_laundry_(receiving_service)', text: 'Dry Cleaning and Laundry (Receiving Service)' },
    { value: 'dry_cleaning_(receiving_service)', text: 'Dry Cleaning (Receiving Service)' },
    { value: 'dry_cleaning', text: 'Dry Cleaning' },
    { value: 'drum_(musical)_wholesalers', text: 'Drum (Musical) Wholesalers' },
    { value: 'drum_(musical)_manufacturers', text: 'Drum (Musical) Manufacturers' },
    { value: 'drug_stores', text: 'Drug Stores' },
    { value: 'drop_forge,_hot_stamping_and_hot_pressing', text: 'Drop Forge, Hot Stamping And Hot Pressing' },
    { value: 'driving_school', text: 'Driving School' },
    { value: 'driving_instruction', text: 'Driving Instruction' },
    { value: 'drive_laying_excluding_asphalt', text: 'Drive Laying Excluding Asphalt' },
    { value: 'driving_authority', text: 'Driving Authority' },
    { value: 'drive_laying', text: 'Drive Laying' },
    { value: 'drilling_machine_tools_wholesalers', text: 'Drilling Machine Tools Wholesalers' },
    { value: 'drilling_machine_tools_manufacturers', text: 'Drilling Machine Tools Manufacturers' },
    { value: 'drilling_contractors', text: 'Drilling Contractors' },
    { value: 'drapery_wholesalers', text: 'Drapery Wholesalers' },
    { value: 'dressmakers', text: 'Dressmakers' },
    { value: 'dress,_blouse_and_skirt_wholesalers', text: 'Dress, Blouse And Skirt Wholesalers' }
  ],
  type_of_work_options: [
    { value: 'beauty', text: 'Beauty' },
    { value: 'bed_and_breakfast', text: 'Bed and Breakfast' },
    { value: 'childminding', text: 'Childminding' },
    { value: 'clerical_work_only', text: 'Clerical Work Only' },
    { value: 'fostering', text: 'Fostering' },
    { value: 'guest_house', text: 'Guest House' },
    { value: 'medical', text: 'Medical' },
    { value: 'n/a', text: 'N/A' },
    { value: 'production_(including_artists/photographers_etc)', text: 'Production (including artists/photographers etc)' },
    { value: 'tuition', text: 'Tuition' }
  ],
  items_kept_options: [
    { value: 'main_building', text: 'Main Building' },
    { value: 'outbuilding', text: 'Outbuilding' }
  ],
  flat_types_options: [
    { value: 'block', text: 'Block' },
    { value: 'individual', text: 'Individual' }
  ],
  flat_floor_num_options: [
    { value: '0', text: '0' },
    { value: '1', text: '1' },
    { value: '2', text: '2' }
  ],
  flood_cause_options: [
    { value: 'canal_failure', text: 'Canal failure' },
    { value: 'dam_burst', text: 'Dam burst' },
    { value: 'groundwater_rising', text: 'Groundwater rising' },
    { value: 'heavy_rainfall', text: 'Heavy rainfall' },
    { value: 'river_burst_its_banks', text: 'River burst its banks' },
    { value: 'sea_breaches_defences', text: 'Sea breaches defences' }
  ],
  who_affected_options: [
    { value: 'other', text: 'Other' },
    { value: 'this_property', text: 'This Property' }
  ],
  type_of_res_options: [
    { value: 'halls_of_residence', text: 'Halls of residence' },
    { value: 'non-self_contained_flat', text: 'Non-self contained flat' },
    { value: 'nursing_home', text: 'Nursing home' },
    { value: 'other', text: 'Other' },
    { value: 'room(s)_in_private_dwelling', text: 'Room(s) in private dwelling' }
  ],
  liability_loi_options: [
    { value: 'l1,000,000', text: 'L1,000,000' },
    { value: 'l2,000,000', text: 'L2,000,000' }
  ]

};

$(document).ready(function () {
  var $select = $('#type_of_heating');
  $.each(groupedOptions['heating_options'], function(_, option) {
    $select.append($('<option>', { value: option.value, text: option.text }));
  });

  var $select = $('#title_options_response_a');
  $.each(groupedOptions['title_options'], function(_, option) {
    $select.append($('<option>', { value: option.value, text: option.text }));
  });

  var $select = $('#credit_check_consent_options');
  $.each(groupedOptions['cc_consent_list'], function(_, option) {
    $select.append($('<option>', { value: option.value, text: option.text }));
  });

  var $select = $('#proposer_address_type_options');
  $.each(groupedOptions['prop_addr_options'], function(_, option) {
    $select.append($('<option>', { value: option.value, text: option.text }));
  });

  var $select = $('#proposer_dwelling_status_options');
  $.each(groupedOptions['prop_dwell_status_options'], function(_, option) {
    $select.append($('<option>', { value: option.value, text: option.text }));
  });

  var $select = $('#tel_type');
  $.each(groupedOptions['tel_type_options'], function(_, option) {
    $select.append($('<option>', { value: option.value, text: option.text }));
  });

  var $select = $('#marriage_status');
  $.each(groupedOptions['marriage_status_options'], function(_, option) {
    $select.append($('<option>', { value: option.value, text: option.text }));
  });

  var $select = $('#prop_type');
  $.each(groupedOptions['property_types'], function(_, option) {
    $select.append($('<option>', { value: option.value, text: option.text }));
  });

  var $select = $('#ownership_select');
  $.each(groupedOptions['ownership_options'], function(_, option) {
    $select.append($('<option>', { value: option.value, text: option.text }));
  });

  var $select = $('#boiler_type_list');
  $.each(groupedOptions['boiler_type_options'], function(_, option) {
    $select.append($('<option>', { value: option.value, text: option.text }));
  });

  var $select = $('#occupancy_list');
  $.each(groupedOptions['occupancy_status_options'], function(_, option) {
    $select.append($('<option>', { value: option.value, text: option.text }));
  });

  var $select = $('#alarm_type_select');
  $.each(groupedOptions['alarm_types_options'], function(_, option) {
    $select.append($('<option>', { value: option.value, text: option.text }));
  });

  var $select = $('#employment_type');
  $.each(groupedOptions['employment_types'], function(_, option) {
    $select.append($('<option>', { value: option.value, text: option.text }));
  });

  var $select = $('#type_of_bus_list');
  $.each(groupedOptions['type_of_bus_options'], function(_, option) {
    $select.append($('<option>', { value: option.value, text: option.text }));
  });

  var $select = $('#type_of_bus_prem_list');
  $.each(groupedOptions['type_of_bus_prem_options'], function(_, option) {
    $select.append($('<option>', { value: option.value, text: option.text }));
  });

  var $select = $('#type_of_work_list');
  $.each(groupedOptions['type_of_work_options'], function(_, option) {
    $select.append($('<option>', { value: option.value, text: option.text }));
  });

  var $select = $('#equip_kept_list');
  $.each(groupedOptions['items_kept_options'], function(_, option) {
    $select.append($('<option>', { value: option.value, text: option.text }));
  });

  var $select = $('#flat_type');
  $.each(groupedOptions['flat_types_options'], function(_, option) {
    $select.append($('<option>', { value: option.value, text: option.text }));
  });

  var $select = $('#flat_floor');
  $.each(groupedOptions['flat_floor_num_options'], function(_, option) {
    $select.append($('<option>', { value: option.value, text: option.text }));
  });

  var $select = $('#flood_cause_list');
  $.each(groupedOptions['flood_cause_options'], function(_, option) {
    $select.append($('<option>', { value: option.text, text: option.text }));
  });

  var $select = $('#who_affected_list');
  $.each(groupedOptions['who_affected_options'], function(_, option) {
    $select.append($('<option>', { value: option.text, text: option.text }));
  });

  var $select = $('#type_of_res_list');
  $.each(groupedOptions['type_of_res_options'], function(_, option) {
    $select.append($('<option>', { value: option.text, text: option.text }));
  });

  var $select = $('#liability_loi_list');
  $.each(groupedOptions['liability_loi_options'], function(_, option) {
    $select.append($('<option>', { value: option.text, text: option.text }));
  });


  

  

  // Options reuse for other lists....
  var $select = $('#title_options_response_b');
  $.each(groupedOptions['title_options'], function(_, option) {
    $select.append($('<option>', { value: option.value, text: option.text }));
  });
  
  var $select = $('#pt_employment_type');
  $.each(groupedOptions['employment_types'], function(_, option) {
    $select.append($('<option>', { value: option.value, text: option.text }));
  });

  var $select = $('#stock_kept_list');
  $.each(groupedOptions['items_kept_options'], function(_, option) {
    $select.append($('<option>', { value: option.value, text: option.text }));
  });



  
});
