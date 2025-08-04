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
  ],
  arch_interest_options: [
    { value: 'grade_1_listed_building', text: 'Grade 1 Listed Building' },
    { value: 'grade_2_listed_building', text: 'Grade 2 Listed Building' },
    { value: 'not_listed', text: 'Not Listed' },
    { value: 'preservation_order', text: 'Preservation Order' }
  ],
  wall_const_options: [
    { value: 'brick', text: 'Brick' },
    { value: 'concrete', text: 'Concrete' },
    { value: 'stone', text: 'Stone' }
  ],
  roof_const_options: [
    { value: 'slate', text: 'Slate' },
    { value: 'tile', text: 'Tile' }
  ],
  type_of_tenant_options: [
    { value: 'asylum_seekers', text: 'Asylum Seekers' },
    { value: 'dss_-_non_referrals', text: 'DSS - non referrals' },
    { value: 'dss_-_referrals', text: 'DSS - referrals' },
    { value: 'family_let', text: 'Family Let' },
    { value: 'holiday', text: 'Holiday' },
    { value: 'n/a', text: 'N/A' },
    { value: 'professionals', text: 'Professionals' },
    { value: 'students', text: 'Students' }
  ],
  type_of_tenancy_agreement_options: [
    { value: 'other', text: 'Other' },
    { value: 'self_and_local_authority/dss', text: 'Self and Local Authority/DSS' },
    { value: 'self_and_tenant', text: 'Self and Tenant' }
  ],
  tenant_relationship_options: [
    { value: 'landlord', text: 'Landlord' },
    { value: 'owner', text: 'Owner' },
    { value: 'tenant', text: 'Tenant' }
  ],
  reason_for_letting_options: [
    { value: 'extended_holiday', text: 'Extended Holiday' },
    { value: 'holiday_let', text: 'Holiday Let' },
    { value: 'investment_property', text: 'Investment Property' },
    { value: 'moving_overseas', text: 'Moving Overseas' },
    { value: 'working_away', text: 'Working Away' }
  ],
  type_of_property_work_options: [
    { value: 'adding_a_conservatory', text: 'Adding a conservatory' },
    { value: 'adding_an_extension', text: 'Adding an extension' },
    { value: 'adding_outbuildings', text: 'Adding outbuildings' },
    { value: 'converting_the_garage', text: 'Converting the garage' },
    { value: 'converting_the_loft', text: 'Converting the loft' },
    { value: 'full_site_redevelopment', text: 'Full site redevelopment' },
    { value: 'general_refurbishment', text: 'General refurbishment' }
  ],
  unoccupancy_reasons_options: [
    { value: 'awaiting_let', text: 'Awaiting Let' },
    { value: 'awaiting_sale', text: 'Awaiting Sale' },
    { value: 'away_on_holiday', text: 'Away on holiday' },
    { value: 'holiday', text: 'Holiday' },
    { value: 'property_is_subject_of_a_will', text: 'Property is subject of a will' },
    { value: 'property_to_be_demolished', text: 'Property to be demolished' },
    { value: 'to_undergo_major_and/or_structural_renovation', text: 'To undergo major and/or structural renovation' },
    { value: 'to_undergo_minor_redecoration/renovation', text: 'To undergo minor redecoration/renovation' }
  ],
  reason_for_unoccupancy_options: [
    { value: 'awaiting_let', text: 'Awaiting Let' },
    { value: 'awaiting_sale', text: 'Awaiting Sale' },
    { value: 'currently_undergoing_major_and/or_structural_renovation', text: 'Currently undergoing major and/or structural renovation' },
    { value: 'currently_undergoing_minor_redecoration/renovation', text: 'Currently undergoing minor redecoration/renovation' },
    { value: 'holiday', text: 'Holiday' },
    { value: 'property_is_subject_of_a_will', text: 'Property is subject of a will' },
    { value: 'property_to_be_demolished', text: 'Property to be demolished' }
  ],
  inspection_frequency_options: [
    { value: '0_days', text: '0 days' },
    { value: '10_days', text: '10 days' },
    { value: '14_days', text: '14 days' },
    { value: '21_days', text: '21 days' },
    { value: '3_monthly', text: '3 Monthly' },
    { value: '30_days', text: '30 days' },
    { value: '45_days', text: '45 days' },
    { value: '6_monthly', text: '6 Monthly' },
    { value: '60_days', text: '60 days' },
    { value: '7_days', text: '7 days' },
    { value: 'every_12_months', text: 'Every 12 Months' },
    { value: 'irregular_intervals', text: 'Irregular Intervals' },
    { value: 'monthly', text: 'Monthly' },
    { value: 'other', text: 'Other' }
  ],
  holiday_home_use_options: [
    { value: 'holiday_home', text: 'Holiday Home' },
    { value: 'permanent_home', text: 'Permanent Home' },
    { value: 'personal_use', text: 'Personal Use' }
  ],
  cover_refused_reason_options: [
    { value: 'claims_experience', text: 'Claims Experience' },
    { value: 'non-disclosure', text: 'Non-disclosure' },
    { value: 'non-payment', text: 'Non-payment' },
    { value: 'other', text: 'Other' },
    { value: 'the_insurer_did_not_cover_the_type_of_underwriting_risk', text: 'The insurer did not cover the type of underwriting risk' }
  ],
  terms_applied_reason_options: [
    { value: 'claims_experience', text: 'Claims experience' },
    { value: 'other', text: 'Other' }
  ],
  contents_level_of_cover_options: [
    { value: 'flea_(fire,_lightning,_explosion,_earthquake_and_aircraft)_and_subsidence', text: 'Flea (Fire, Lightning, Explosion, Earthquake and Aircraft) and Subsidence' },
    { value: 'flea_only', text: 'Flea only' },
    { value: 'full_perils', text: 'Full Perils' }
  ],
  contents_vol_excess_options: [
    { value: '0', text: '0' },
    { value: '50', text: '50' },
    { value: '100', text: '100' },
    { value: '150', text: '150' },
    { value: '200', text: '200' },
    { value: '250', text: '250' },
    { value: '300', text: '300' },
    { value: '350', text: '350' },
    { value: '400', text: '400' },
    { value: '450', text: '450' },
    { value: '500', text: '500' }
  ],
  prev_ins_premium_paid_options: [
    { value: 'annually', text: 'Annually' },
    { value: 'free_insurance_provided', text: 'Free Insurance Provided' },
    { value: 'monthly', text: 'Monthly' },
    { value: 'no_previous_insurance', text: 'No Previous Insurance' },
    { value: 'quarterly', text: 'Quarterly' },
    { value: 'withheld', text: 'Withheld' }
  ],
  lock_type_options: [
    { value: '3_bolt_multipoint_locking_system', text: '3 Bolt Multipoint Locking System' },
    { value: 'anti_ram_raid_bollards', text: 'Anti Ram Raid Bollards' },
    { value: 'anti-flood_taps', text: 'Anti-Flood Taps' },
    { value: 'anti-lift_device', text: 'Anti-Lift Device' },
    { value: 'bars', text: 'Bars' },
    { value: 'cable_lock_devices', text: 'Cable Lock Devices' },
    { value: 'close_shackle_padlock_-_5_or_more_levers', text: 'Close Shackle Padlock - 5 Or More Levers' },
    { value: 'code_door_lock', text: 'Code Door Lock' },
    { value: 'dead_bolt', text: 'Dead Bolt' },
    { value: 'external_grills', text: 'External Grills' },
    { value: 'frames_greater_than_45mm_thick', text: 'Frames Greater Than 45mm Thick' },
    { value: 'hinge_bolts', text: 'Hinge Bolts' },
    { value: 'hitchlock', text: 'Hitchlock' },
    { value: 'hook_bolt', text: 'Hook Bolt' },
    { value: 'hook_bolt_bs3621', text: 'Hook Bolt BS3621' },
    { value: 'internal_grills', text: 'Internal Grills' },
    { value: 'key_operated_door_stop', text: 'Key Operated Door Stop' },
    { value: 'key_operated_mortise_securty_bolt', text: 'Key Operated Mortise Securty Bolt' },
    { value: 'key_operated_surface_security_bolt', text: 'Key Operated Surface Security Bolt' },
    { value: 'key_operated_window_locks', text: 'Key Operated Window Locks' },
    { value: 'lock_down_devices', text: 'Lock Down Devices' },
    { value: 'locking_bar', text: 'Locking Bar' },
    { value: 'mortise_deadlock_-_3_lever', text: 'Mortise Deadlock - 3 Lever' },
    { value: 'mortise_deadlock_-_4_lever', text: 'Mortise Deadlock - 4 Lever' },
    { value: 'mortise_deadlock_-_5_or_more_levers', text: 'Mortise Deadlock - 5 Or More Levers' },
    { value: 'mortise_deadlock_-_5_or_more_levers_bs3621', text: 'Mortise Deadlock - 5 Or More Levers BS3621' },
    { value: 'mortise_rack_bolts', text: 'Mortise Rack Bolts' },
    { value: 'open_shackle_padlock_-_5_or_more_levers', text: 'Open Shackle Padlock - 5 Or More Levers' },
    { value: 'other', text: 'Other' },
    { value: 'outboard_motor_security_lock', text: 'Outboard Motor Security Lock' },
    { value: 'rim_deadlock', text: 'Rim Deadlock' },
    { value: 'rim_lock', text: 'Rim Lock' },
    { value: 'rim_lock_automatic_deadlock', text: 'Rim Lock Automatic Deadlock' },
    { value: 'rim_lock_automatic_deadlock_bs3621', text: 'Rim Lock Automatic Deadlock BS3621' },
    { value: 'security_fence', text: 'Security Fence' },
    { value: 'security_lock', text: 'Security Lock' },
    { value: 'security_marking', text: 'Security Marking' },
    { value: 'shoot_bolt', text: 'Shoot Bolt' },
    { value: 'shutters_-_metal', text: 'Shutters - Metal' },
    { value: 'shutters_-_wooden', text: 'Shutters - Wooden' },
    { value: 'standard_iron_grills', text: 'Standard Iron Grills' },
    { value: 'steel_lined_doors', text: 'Steel Lined Doors' },
    { value: 'tunnel_bolts', text: 'Tunnel Bolts' },
    { value: 'wheel_clamp', text: 'Wheel Clamp' }
  ],
  mains_or_battery_options: [
    { value: 'battery', text: 'Battery' },
    { value: 'mains', text: 'Mains' }
  ],
  safe_type_options: [
    { value: 'portable', text: 'Portable' },
    { value: 'stand_alone', text: 'Stand Alone' },
    { value: 'under_floor', text: 'Under Floor' },
    { value: 'wall', text: 'Wall' }
  ],
  conv_types_options: [
    { value: 'absconding', text: 'Absconding' },
    { value: 'abusive_words_or_behaviour', text: 'Abusive Words Or Behaviour' },
    { value: 'actual_bodily_harm_(abh)', text: 'Actual Bodily Harm (ABH)' },
    { value: 'administering_noxious_substances_to_commit_sexual_act', text: 'Administering Noxious Substances To Commit Sexual Act' },
    { value: 'affray', text: 'Affray' },
    { value: 'aggravated_vehicle_taking', text: 'Aggravated Vehicle Taking' },
    { value: 'air_gun_in_a_public_place', text: 'Air Gun In A Public Place' },
    { value: 'animals_(cruelty_to)', text: 'Animals (Cruelty To)' },
    { value: 'anti_social_behaviour_order_-_breach', text: 'Anti Social Behaviour Order - Breach' },
    { value: 'any_criminal_injury_related', text: 'Any Criminal Injury Related' },
    { value: 'arson', text: 'Arson' },
    { value: 'arson_-_with_intent_to_endanger_life', text: 'Arson - With Intent To Endanger Life' },
    { value: 'article_with_blade_or_point_in_a_public_place', text: 'Article With Blade Or Point In A Public Place' },
    { value: 'assaulting_a_police_officer', text: 'Assaulting A Police Officer' },
    { value: 'avoiding_customs_duty', text: 'Avoiding Customs Duty' },
    { value: 'battery', text: 'Battery' },
    { value: 'black_mail', text: 'Black Mail' },
    { value: 'bomb_hoax', text: 'Bomb Hoax' },
    { value: 'breach_of_consumer_credit_legislation', text: 'Breach Of Consumer Credit Legislation' },
    { value: 'breach_of_consumer_protection_legislation', text: 'Breach Of Consumer Protection Legislation' },
    { value: 'breach_of_environmental_legislation', text: 'Breach Of Environmental Legislation' },
    { value: 'breach_of_factories_act', text: 'Breach Of Factories Act' },
    { value: 'breach_of_health_and_safety_legislation', text: 'Breach Of Health And Safety Legislation' },
    { value: 'breach_of_quality_or_safety_of_goods_legislation', text: 'Breach Of Quality Or Safety Of Goods Legislation' },
    { value: 'breach_of_the_peace', text: 'Breach Of The Peace' },
    { value: 'burglary', text: 'Burglary' },
    { value: 'burglary_-_aggravated', text: 'Burglary - Aggravated' },
    { value: 'burglary_-_going_equipped', text: 'Burglary - Going Equipped' },
    { value: 'children_-_cruelty', text: 'Children - Cruelty' },
    { value: 'common_assault', text: 'Common Assault' },
    { value: 'computer_-modifying_equipment_without_authorisation', text: 'Computer -Modifying Equipment Without Authorisation' },
    { value: 'conspiracy_to_defraud', text: 'Conspiracy To Defraud' },
    { value: 'conspiracy_to_import/_export_drugs', text: 'Conspiracy To Import/ Export Drugs' },
    { value: 'conspiracy_to_steal', text: 'Conspiracy To Steal' },
    { value: 'contempt_of_court', text: 'Contempt Of Court' },
    { value: 'criminal_damage', text: 'Criminal Damage' },
    { value: 'culpable_&amp;_reckless_conduct', text: 'Culpable &amp; Reckless Conduct' },
    { value: 'cultivating_cannabis', text: 'Cultivating Cannabis' },
    { value: 'death_by_dangerous_/reckless_driving', text: 'Death By Dangerous /Reckless Driving' },
    { value: 'deception', text: 'Deception' },
    { value: 'dishonesty_related', text: 'Dishonesty Related' },
    { value: 'domestic_assault', text: 'Domestic Assault' },
    { value: 'drug_related', text: 'Drug Related' },
    { value: 'drunk_&amp;_disorderly', text: 'Drunk &amp; Disorderly' },
    { value: 'dss_offences', text: 'DSS Offences' },
    { value: 'escape_from_prison/custody', text: 'Escape From Prison/Custody' },
    { value: 'false_accounting', text: 'False Accounting' },
    { value: 'forgery', text: 'Forgery' },
    { value: 'fraud', text: 'Fraud' },
    { value: 'fraud_-_insurance', text: 'Fraud - Insurance' },
    { value: 'grievous_bodily_harm_(gbh)', text: 'Grievous Bodily Harm (GBH)' },
    { value: 'grievous_bodily_harm_with_intent_to_harm', text: 'Grievous Bodily Harm With Intent To Harm' },
    { value: 'gross_indecency', text: 'Gross Indecency' },
    { value: 'handling_stolen_goods', text: 'Handling Stolen Goods' },
    { value: 'harassment', text: 'Harassment' },
    { value: 'harbouring_an_escaped_criminal', text: 'Harbouring An Escaped Criminal' },
    { value: 'illegal_importation_of_immigrants', text: 'Illegal Importation Of Immigrants' },
    { value: 'images_of_a_minor_from_the_internet_-downloading', text: 'Images Of a Minor From The Internet -Downloading' },
    { value: 'images_of_a_minor_on_the_internet_viewing', text: 'Images Of a Minor On The Internet Viewing' },
    { value: 'import/export_drugs', text: 'Import/Export Drugs' },
    { value: 'incest_involving_a_child', text: 'Incest Involving A Child' },
    { value: 'incitement_to_racial_hatred', text: 'Incitement To Racial Hatred' },
    { value: 'indecent_assault', text: 'Indecent Assault' },
    { value: 'indecent_assault_on_a_minor', text: 'Indecent Assault On A Minor' },
    { value: 'indecent_exposure', text: 'Indecent Exposure' },
    { value: 'insider_trading', text: 'Insider Trading' },
    { value: 'kerb_crawling', text: 'Kerb Crawling' },
    { value: 'kidnapping', text: 'Kidnapping' },
    { value: 'living_on_immoral_earnings', text: 'Living On Immoral Earnings' },
    { value: 'manslaughter', text: 'Manslaughter' },
    { value: 'motoring_offence', text: 'Motoring Offence' },
    { value: 'murder', text: 'Murder' },
    { value: 'murder_-threat_to', text: 'Murder -Threat To' },
    { value: 'obstructing_a_police_officer', text: 'Obstructing A Police Officer' },
    { value: 'perjury', text: 'Perjury' },
    { value: 'perverting_the_course_of_justice', text: 'Perverting The Course Of Justice' },
    { value: 'possession_of_a_class_‘a’_drug', text: 'Possession Of a Class ‘A’ Drug' },
    { value: 'possession_of_a_class_‘b’_drug', text: 'Possession Of a Class ‘B’ Drug' },
    { value: 'possession_of_a_class_‘c’_drug', text: 'Possession Of a Class ‘C’ Drug' },
    { value: 'possession_of_an_offensive_weapon', text: 'Possession Of An Offensive Weapon' },
    { value: 'possession_of_firearms/_explosive', text: 'Possession Of Firearms/ Explosive' },
    { value: 'possession_with_intent_to_supply_a_class_‘a’_drug', text: 'Possession With Intent To Supply a Class ‘A’ Drug' },
    { value: 'possession_with_intent_to_supply_a_class_‘b’_drug', text: 'Possession With Intent To Supply a Class ‘B’ Drug' },
    { value: 'possession_with_intent_to_supply_a_class_‘c’_drug', text: 'Possession With Intent To Supply a Class ‘C’ Drug' },
    { value: 'procuring_the_services_of_a_prostitute', text: 'Procuring The Services Of A Prostitute' },
    { value: 'prostitution', text: 'Prostitution' },
    { value: 'rape', text: 'Rape' },
    { value: 'receiving_stolen_goods', text: 'Receiving Stolen Goods' },
    { value: 'robbery', text: 'Robbery' },
    { value: 'robbery_-_armed', text: 'Robbery - Armed' },
    { value: 'shoplifting', text: 'Shoplifting' },
    { value: 'terrorism', text: 'Terrorism' },
    { value: 'theft', text: 'Theft' },
    { value: 'theft_from_employer', text: 'Theft From Employer' },
    { value: 'threatening_behaviour', text: 'Threatening Behaviour' },
    { value: 'trespassing', text: 'Trespassing' },
    { value: 'voyeurism', text: 'Voyeurism' },
    { value: 'wounding', text: 'Wounding' },
    { value: 'wounding_a_police_officer', text: 'Wounding A Police Officer' },
    { value: 'wounding_with_intent', text: 'Wounding With Intent' },
    { value: 'zz_-_not_covered_by_any_other_item_on_the_list', text: 'ZZ - Not Covered By Any Other Item On The List' }
  ],
  conv_sentence_options: [
    { value: 'community_service', text: 'Community Service' },
    { value: 'fine', text: 'Fine' },
    { value: 'prison_sentence', text: 'Prison Sentence' }
  ],
  peril_type_options: [
    { value: 'cliff', text: 'Cliff' },
    { value: 'quarry', text: 'Quarry' },
    { value: 'watercourse', text: 'Watercourse' }
  ],
  tree_status_options: [
    { value: 'dead', text: 'Dead' },
    { value: 'live', text: 'Live' },
    { value: 'removed', text: 'Removed' }
  ],
  tree_type_options: [
    { value: 'acacia_false', text: 'Acacia False' },
    { value: 'acer', text: 'Acer' },
    { value: 'alder', text: 'Alder' },
    { value: 'apple', text: 'Apple' },
    { value: 'ash', text: 'Ash' },
    { value: 'bay_laurel', text: 'Bay Laurel' },
    { value: 'beech', text: 'Beech' },
    { value: 'birch', text: 'Birch' },
    { value: 'blackthorn', text: 'Blackthorn' },
    { value: 'cedar', text: 'Cedar' },
    { value: 'cherry_(fruiting)', text: 'Cherry (fruiting)' },
    { value: 'cherry_-_japanese', text: 'Cherry - Japanese' },
    { value: 'cherry_-_laurel', text: 'Cherry - Laurel' },
    { value: 'cherry_-_wild', text: 'Cherry - Wild' },
    { value: 'conifer', text: 'Conifer' },
    { value: 'cypress_-_lawsons', text: 'Cypress - Lawsons' },
    { value: 'cypress_-_leyland_(leylandii)', text: 'Cypress - Leyland (Leylandii)' },
    { value: 'cypress_-_monterey', text: 'Cypress - Monterey' },
    { value: 'damson', text: 'Damson' },
    { value: 'douglas_fir', text: 'Douglas Fir' },
    { value: 'elm_-_english', text: 'Elm - English' },
    { value: 'elm_-_wheatley', text: 'Elm - Wheatley' },
    { value: 'elm_-_wych', text: 'Elm - Wych' },
    { value: 'eucalyptus', text: 'Eucalyptus' },
    { value: 'fir', text: 'Fir' },
    { value: 'hawthorn', text: 'Hawthorn' },
    { value: 'hazel', text: 'Hazel' },
    { value: 'holly', text: 'Holly' },
    { value: 'honey_locust', text: 'Honey Locust' },
    { value: 'hornbeam', text: 'Hornbeam' },
    { value: 'horse_chestnut', text: 'Horse Chestnut' },
    { value: 'laburnum', text: 'Laburnum' },
    { value: 'laurel', text: 'Laurel' },
    { value: 'lime', text: 'Lime' },
    { value: 'magnolia', text: 'Magnolia' },
    { value: 'maple_-_chinese', text: 'Maple - Chinese' },
    { value: 'maple_-_japanese', text: 'Maple - Japanese' },
    { value: 'maple_-_norway', text: 'Maple - Norway' },
    { value: 'monkey_puzzle', text: 'Monkey Puzzle' },
    { value: 'mountain_ash', text: 'Mountain Ash' },
    { value: 'mulberry', text: 'Mulberry' },
    { value: 'oak_-_english', text: 'Oak - English' },
    { value: 'oak_-_red', text: 'Oak - Red' },
    { value: 'oak_-_turkey', text: 'Oak - Turkey' },
    { value: 'oak___holm', text: 'Oak _ Holm' },
    { value: 'olive', text: 'Olive' },
    { value: 'other', text: 'Other' },
    { value: 'palm', text: 'Palm' },
    { value: 'pear', text: 'Pear' },
    { value: 'pine', text: 'Pine' },
    { value: 'plane', text: 'Plane' },
    { value: 'plum', text: 'Plum' },
    { value: 'poplar_-_hybrid_black', text: 'Poplar - Hybrid Black' },
    { value: 'poplar_-_lombardy', text: 'Poplar - Lombardy' },
    { value: 'rowan', text: 'Rowan' },
    { value: 'spruce', text: 'Spruce' },
    { value: 'sycamore', text: 'Sycamore' },
    { value: 'tree_of_heaven', text: 'Tree of Heaven' },
    { value: 'walnut', text: 'Walnut' },
    { value: 'wellingtonia', text: 'Wellingtonia' },
    { value: 'white_beam', text: 'White Beam' },
    { value: 'willow_-_crack', text: 'Willow - Crack' },
    { value: 'willow_-_weeping', text: 'Willow - Weeping' },
    { value: 'willow_-_white', text: 'Willow - White' },
    { value: 'yew', text: 'Yew' }
  ],
  tree_land_loptions: [
    { value: 'common_land', text: 'Common Land' },
    { value: 'council', text: 'Council' },
    { value: 'neighbours', text: 'Neighbours' },
    { value: 'own_property', text: 'Own Property' }
  ],
  wall_construction_options: [
    { value: 'aluminium', text: 'Aluminium' },
    { value: 'asbestos', text: 'Asbestos' },
    { value: 'brick', text: 'Brick' },
    { value: 'bungaroosh', text: 'Bungaroosh' },
    { value: 'clay-lump/adobe', text: 'Clay-Lump/Adobe' },
    { value: 'clunch', text: 'Clunch' },
    { value: 'cob_construction', text: 'Cob Construction' },
    { value: 'concrete', text: 'Concrete' },
    { value: 'corrugated_iron', text: 'Corrugated Iron' },
    { value: 'essex_construction', text: 'Essex Construction' },
    { value: 'fibreglass_construction', text: 'Fibreglass Construction' },
    { value: 'flint', text: 'Flint' },
    { value: 'glass', text: 'Glass' },
    { value: 'lathe_and_plaster', text: 'Lathe And Plaster' },
    { value: 'metal', text: 'Metal' },
    { value: 'mundic_block', text: 'Mundic Block' },
    { value: 'plastic', text: 'Plastic' },
    { value: 'prefabricated_building_-_combustible_materials', text: 'Prefabricated Building - Combustible Materials' },
    { value: 'prefabricated_building_-_non_combustible_materials', text: 'Prefabricated Building - Non Combustible Materials' },
    { value: 'standard_construction', text: 'Standard Construction' },
    { value: 'steel_frame', text: 'Steel Frame' },
    { value: 'steel_frame/brick', text: 'Steel Frame/Brick' },
    { value: 'steel_frame/render_or_pebbledash', text: 'Steel Frame/Render Or Pebbledash' },
    { value: 'steel_frame/tile', text: 'Steel Frame/Tile' },
    { value: 'steel_frame/wood_shiplap', text: 'Steel Frame/Wood Shiplap' },
    { value: 'stone', text: 'Stone' },
    { value: 'stramit_construction', text: 'Stramit Construction' },
    { value: 'straw_bale', text: 'Straw Bale' },
    { value: 'structurally_insulated_panels_(sips)', text: 'Structurally Insulated Panels (SIPs)' },
    { value: 'timber', text: 'Timber' },
    { value: 'timber_frame', text: 'Timber Frame' },
    { value: 'timber_frame/brick', text: 'Timber Frame/Brick' },
    { value: 'timber_frame/lathe_and_plaster', text: 'Timber Frame/Lathe And Plaster' },
    { value: 'timber_frame/stone', text: 'Timber Frame/Stone' },
    { value: 'timber_frame/timber', text: 'Timber Frame/Timber' },
    { value: 'timber/plaster', text: 'Timber/Plaster' },
    { value: 'wattle_and_daub_construction', text: 'Wattle And Daub Construction' },
    { value: 'woodwall', text: 'Woodwall' },
    { value: 'woodwork_construction', text: 'Woodwork Construction' },
    { value: 'zz_-_not_covered_by_any_other_item_on_the_list', text: 'ZZ - Not Covered By Any Other Item On The List' }
  ],
  roof_construction_options: [
    { value: 'aluminium', text: 'Aluminium' },
    { value: 'asbestos', text: 'Asbestos' },
    { value: 'asphalt', text: 'Asphalt' },
    { value: 'concrete', text: 'Concrete' },
    { value: 'copper', text: 'Copper' },
    { value: 'corrugated_iron', text: 'Corrugated Iron' },
    { value: 'ethylene_propylene_diene_monomer_epdm', text: 'Ethylene Propylene Diene Monomer EPDM' },
    { value: 'felt_on_timber', text: 'Felt On Timber' },
    { value: 'fibreglass', text: 'Fibreglass' },
    { value: 'glass', text: 'Glass' },
    { value: 'green_roofs', text: 'Green Roofs' },
    { value: 'lead', text: 'Lead' },
    { value: 'metal', text: 'Metal' },
    { value: 'plastic', text: 'Plastic' },
    { value: 'polycarbonate', text: 'Polycarbonate' },
    { value: 'shingle', text: 'Shingle' },
    { value: 'shingle_-_asphalt', text: 'Shingle - Asphalt' },
    { value: 'shingle_-_pine/spruce/cedar', text: 'Shingle - Pine/Spruce/Cedar' },
    { value: 'slate', text: 'Slate' },
    { value: 'standard_construction', text: 'Standard Construction' },
    { value: 'stramit', text: 'Stramit' },
    { value: 'thatch_-_fibre', text: 'Thatch - Fibre' },
    { value: 'thatch_-_reed', text: 'Thatch - Reed' },
    { value: 'tile', text: 'Tile' },
    { value: 'timber', text: 'Timber' },
    { value: 'turnerised', text: 'Turnerised' },
    { value: 'woodwork_construction', text: 'Woodwork Construction' },
    { value: 'zinc', text: 'Zinc' },
    { value: 'zz_-_not_covered_by_any_other_item_on_the_list', text: 'ZZ - Not Covered By Any Other Item On The List' }
  ],
  spec_item_type_options: [
    { value: 'accident_&amp;_sickness_cover', text: 'Accident &amp; Sickness Cover' },
    { value: 'accident_cover', text: 'Accident Cover' },
    { value: 'accident,_sickness_&amp;_life_cover', text: 'Accident, Sickness &amp; Life Cover' },
    { value: 'accident,_sickness_&amp;_unemployment_cover', text: 'Accident, Sickness &amp; Unemployment Cover' },
    { value: 'accident,_sickness,_unemployment_&amp;_life_cover', text: 'Accident, Sickness, Unemployment &amp; Life Cover' },
    { value: 'aerials_(less_than_60_feet_high)', text: 'Aerials (Less Than 60 Feet High)' },
    { value: 'aerials_(over_60_feet_high)', text: 'Aerials (Over 60 Feet High)' },
    { value: 'all_risk_cover', text: 'All Risk Cover' },
    { value: 'angling_equipment', text: 'Angling Equipment' },
    { value: 'annual_travel', text: 'Annual Travel' },
    { value: 'antique_furniture', text: 'Antique Furniture' },
    { value: 'antique\rare_books', text: 'Antique\Rare Books' },
    { value: 'appliance_breakdown_-_home_entertainment', text: 'Appliance Breakdown - Home Entertainment' },
    { value: 'appliance_breakdown_-_kitchen', text: 'Appliance Breakdown - Kitchen' },
    { value: 'archery_equipment', text: 'Archery Equipment' },
    { value: 'articles_made_of_precious_stones', text: 'Articles Made Of Precious Stones' },
    { value: 'bank/credit_cards', text: 'Bank/Credit Cards' },
    { value: 'boat_special_equipment', text: 'Boat Special Equipment' },
    { value: 'boat_trailer', text: 'Boat Trailer' },
    { value: 'boats/crafts', text: 'Boats/Crafts' },
    { value: 'building', text: 'Building' },
    { value: 'business_equipment', text: 'Business Equipment' },
    { value: 'business_money', text: 'Business Money' },
    { value: 'business_stock', text: 'Business Stock' },
    { value: 'camcorders', text: 'Camcorders' },
    { value: 'camping_equipment', text: 'Camping Equipment' },
    { value: 'car_audio_equipment', text: 'Car Audio Equipment' },
    { value: 'car_telephones', text: 'Car Telephones' },
    { value: 'caravan', text: 'Caravan' },
    { value: 'caravan_ancillary_equipment', text: 'Caravan Ancillary Equipment' },
    { value: 'caravan_contents', text: 'Caravan Contents' },
    { value: 'caravan_motor_mover', text: 'Caravan Motor Mover' },
    { value: 'cash', text: 'Cash' },
    { value: 'children_at_college_cover', text: 'Children At College Cover' },
    { value: 'childrens_motorbike', text: 'Childrens Motorbike' },
    { value: 'china', text: 'China' },
    { value: 'china,_glass_and_porcelain', text: 'China, Glass And Porcelain' },
    { value: 'clearance_and_resiting_of_caravan', text: 'Clearance And Resiting Of Caravan' },
    { value: 'clocks', text: 'Clocks' },
    { value: 'clothing', text: 'Clothing' },
    { value: 'clothing_and_personal_effects', text: 'Clothing And Personal Effects' },
    { value: 'clothing_and_personal_effects_-_representatives', text: 'Clothing And Personal Effects - Representatives' },
    { value: 'clothing_and_personal_effects_-_service_personnel', text: 'Clothing And Personal Effects - Service Personnel' },
    { value: 'coin_collection', text: 'Coin Collection' },
    { value: 'computer_equipment', text: 'Computer Equipment' },
    { value: 'contact_lenses', text: 'Contact Lenses' },
    { value: 'contents_-_general', text: 'Contents - General' },
    { value: 'contents_-_total_(where_no_breakdown_available)', text: 'Contents - Total (Where No Breakdown Available)' },
    { value: 'contents_in_depository', text: 'Contents In Depository' },
    { value: 'cups,_shields,_trophies_and_masonic_regalia', text: 'Cups, Shields, Trophies And Masonic Regalia' },
    { value: 'curios', text: 'Curios' },
    { value: 'dentures_(including_crowns)', text: 'Dentures (Including Crowns)' },
    { value: 'domestic_animals', text: 'Domestic Animals' },
    { value: 'electrical_goods', text: 'Electrical Goods' },
    { value: 'employers_liability', text: 'Employers Liability' },
    { value: 'extended_legal_liability', text: 'Extended Legal Liability' },
    { value: 'frozen_food', text: 'Frozen Food' },
    { value: 'furniture', text: 'Furniture' },
    { value: 'furs', text: 'Furs' },
    { value: 'furs_in_cold_storage', text: 'Furs In Cold Storage' },
    { value: 'garden_items', text: 'Garden Items' },
    { value: 'gas_boiler_central_heating_breakdown_cover', text: 'Gas Boiler Central Heating Breakdown Cover' },
    { value: 'gemstones', text: 'Gemstones' },
    { value: 'glass', text: 'Glass' },
    { value: 'go-kart', text: 'Go-Kart' },
    { value: 'gold_items', text: 'Gold Items' },
    { value: 'gold_silver_plate', text: 'Gold Silver Plate' },
    { value: 'golf_trolley_(self_propelled)', text: 'Golf Trolley (Self Propelled)' },
    { value: 'golfing_equipment', text: 'Golfing Equipment' },
    { value: 'guns', text: 'Guns' },
    { value: 'hearing_aids', text: 'Hearing Aids' },
    { value: 'heating_oil', text: 'Heating Oil' },
    { value: 'hole_in_one', text: 'Hole In One' },
    { value: 'home_emergency_cover', text: 'Home Emergency Cover' },
    { value: 'homeworker_cover', text: 'Homeworker Cover' },
    { value: 'items_at_university/college', text: 'Items At University/College' },
    { value: 'items_in_car', text: 'Items In Car' },
    { value: 'jewellery/watches', text: 'Jewellery/Watches' },
    { value: 'jury_service', text: 'Jury Service' },
    { value: 'legal_expenses', text: 'Legal Expenses' },
    { value: 'life_cover', text: 'Life Cover' },
    { value: 'lpg_gas', text: 'LPG Gas' },
    { value: 'manuscripts', text: 'Manuscripts' },
    { value: 'medal_collection', text: 'Medal Collection' },
    { value: 'miscellaneous_valuables', text: 'Miscellaneous Valuables' },
    { value: 'mobile_phone(s)', text: 'Mobile Phone(s)' },
    { value: 'model_aircraft', text: 'Model Aircraft' },
    { value: 'money_and_credit_cards', text: 'Money And Credit Cards' },
    { value: 'mountain_bike', text: 'Mountain Bike' },
    { value: 'musical_instruments_-_amateur', text: 'Musical Instruments - Amateur' },
    { value: 'musical_instruments_-_professional', text: 'Musical Instruments - Professional' },
    { value: 'optical_equipment_(eg_binoculars,_telescopes,_etc)', text: 'Optical Equipment (eg Binoculars, Telescopes, etc)' },
    { value: 'other_collections', text: 'Other Collections' },
    { value: 'outboard_motor', text: 'Outboard Motor' },
    { value: 'outbuilding/shed/garage_contents', text: 'Outbuilding/Shed/Garage Contents' },
    { value: 'paintings', text: 'Paintings' },
    { value: 'pearls', text: 'Pearls' },
    { value: 'pedal_cycles', text: 'Pedal Cycles' },
    { value: 'personal_accident', text: 'Personal Accident' },
    { value: 'personal_accident_-_travel', text: 'Personal Accident - Travel' },
    { value: 'personal_effects', text: 'Personal Effects' },
    { value: 'personal_effects_(uk_europe)', text: 'Personal Effects (UK Europe)' },
    { value: 'personal_effects_(world_wide)', text: 'Personal Effects (World Wide)' },
    { value: 'personal_items_(excluding_jewellery)', text: 'Personal Items (Excluding Jewellery)' },
    { value: 'personal_money', text: 'Personal Money' },
    { value: 'personal_public_liability', text: 'Personal Public Liability' },
    { value: 'photographic_equipment_-_amateur', text: 'Photographic Equipment - Amateur' },
    { value: 'photographic_equipment_-_professional', text: 'Photographic Equipment - Professional' },
    { value: 'pianos', text: 'Pianos' },
    { value: 'pictures', text: 'Pictures' },
    { value: 'porcelain', text: 'Porcelain' },
    { value: 'portable_computers', text: 'Portable Computers' },
    { value: 'portable_tv', text: 'Portable TV' },
    { value: 'prams_and_pushchairs', text: 'Prams And Pushchairs' },
    { value: 'precious_metals', text: 'Precious Metals' },
    { value: 'property_kept_at_home_but_not_included', text: 'Property Kept At Home But Not Included' },
    { value: 'property_lodged_in_a_bank', text: 'Property Lodged In A Bank' },
    { value: 'property_not_kept_at_home_but_included', text: 'Property Not Kept At Home But Included' },
    { value: 'property_owners_liability', text: 'Property Owners Liability' },
    { value: 'purchase_protection_cover', text: 'Purchase Protection Cover' },
    { value: 'quad_bike', text: 'Quad Bike' },
    { value: 'racing_bike', text: 'Racing Bike' },
    { value: 'rent', text: 'Rent' },
    { value: 'riding_tack', text: 'Riding Tack' },
    { value: 'rugs', text: 'Rugs' },
    { value: 'sailboards', text: 'Sailboards' },
    { value: 'sculptures', text: 'Sculptures' },
    { value: 'sickness_cover', text: 'Sickness Cover' },
    { value: 'silver_items', text: 'Silver Items' },
    { value: 'single_article_limit', text: 'Single Article Limit' },
    { value: 'skis_(including_water_skis)', text: 'Skis (Including Water Skis)' },
    { value: 'sound_equipment', text: 'Sound Equipment' },
    { value: 'specified_items', text: 'Specified Items' },
    { value: 'specified_valuables_within_contents', text: 'Specified Valuables Within Contents' },
    { value: 'spectacles', text: 'Spectacles' },
    { value: 'sporting_equipment', text: 'Sporting Equipment' },
    { value: 'sporting_guns_and_shooting_equipment', text: 'Sporting Guns And Shooting Equipment' },
    { value: 'stamp_collection', text: 'Stamp Collection' },
    { value: 'stamp/coin_collections', text: 'Stamp/Coin Collections' },
    { value: 'statues', text: 'Statues' },
    { value: 'stock_in_trade', text: 'Stock In Trade' },
    { value: 'sub-aqua_equipment', text: 'Sub-Aqua Equipment' },
    { value: 'sunglasses', text: 'Sunglasses' },
    { value: 'tandem_bike', text: 'Tandem Bike' },
    { value: 'tapestries', text: 'Tapestries' },
    { value: 'tenants_improvements_to_buildings', text: 'Tenants Improvements to Buildings' },
    { value: 'tenants_liability', text: 'Tenants Liability' },
    { value: 'tools', text: 'Tools' },
    { value: 'total_valuables_within_contents', text: 'Total Valuables Within Contents' },
    { value: 'touring_bike', text: 'Touring Bike' },
    { value: 'trailers', text: 'Trailers' },
    { value: 'tvs/videos/hifi/radios', text: 'TVs/Videos/HiFi/Radios' },
    { value: 'unemployment_cover', text: 'Unemployment Cover' },
    { value: 'unspecified_items', text: 'Unspecified Items' },
    { value: 'valuables', text: 'Valuables' },
    { value: 'valuables,_deeds_and_securities_deposited_in_bank', text: 'Valuables, Deeds And Securities Deposited In Bank' },
    { value: 'video_cassette_recorders', text: 'Video Cassette Recorders' },
    { value: 'video_tape_recorders_and_video_cameras', text: 'Video Tape Recorders And Video Cameras' },
    { value: 'wheelchairs_-_electric', text: 'Wheelchairs - Electric' },
    { value: 'wheelchairs_-_self_propelled', text: 'Wheelchairs - Self Propelled' },
    { value: 'works_of_art_etc.', text: 'Works Of Art Etc.' },
    { value: 'zz_-_not_covered_by_any_other_item_on_the_list', text: 'ZZ - Not Covered By Any Other Item On The List' }
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

  var $select = $('#arch_interest_list');
  $.each(groupedOptions['arch_interest_options'], function(_, option) {
    $select.append($('<option>', { value: option.text, text: option.text }));
  });

  var $select = $('#wall_const_list');
  $.each(groupedOptions['wall_const_options'], function(_, option) {
    $select.append($('<option>', { value: option.text, text: option.text }));
  });

  var $select = $('#roof_const_list');
  $.each(groupedOptions['roof_const_options'], function(_, option) {
    $select.append($('<option>', { value: option.text, text: option.text }));
  });

  var $select = $('#type_of_tenant_list');
  $.each(groupedOptions['type_of_tenant_options'], function(_, option) {
    $select.append($('<option>', { value: option.text, text: option.text }));
  });

  var $select = $('#type_of_tenancy_agreement_list');
  $.each(groupedOptions['type_of_tenancy_agreement_options'], function(_, option) {
    $select.append($('<option>', { value: option.text, text: option.text }));
  });

  var $select = $('#tenant_relationship_list');
  $.each(groupedOptions['tenant_relationship_options'], function(_, option) {
    $select.append($('<option>', { value: option.text, text: option.text }));
  });

  var $select = $('#reason_for_letting_list');
  $.each(groupedOptions['reason_for_letting_options'], function(_, option) {
    $select.append($('<option>', { value: option.text, text: option.text }));
  });

  var $select = $('#type_of_property_work_list');
  $.each(groupedOptions['type_of_property_work_options'], function(_, option) {
    $select.append($('<option>', { value: option.text, text: option.text }));
  });
  
  var $select = $('#unoccupancy_reasons_list');
  $.each(groupedOptions['unoccupancy_reasons_options'], function(_, option) {
    $select.append($('<option>', { value: option.text, text: option.text }));
  });

  var $select = $('#reason_for_unoccupancy_list');
  $.each(groupedOptions['reason_for_unoccupancy_options'], function(_, option) {
    $select.append($('<option>', { value: option.text, text: option.text }));
  });

  var $select = $('#inspection_frequency_list');
  $.each(groupedOptions['inspection_frequency_options'], function(_, option) {
    $select.append($('<option>', { value: option.text, text: option.text }));
  });

  var $select = $('#holiday_home_use_list');
  $.each(groupedOptions['holiday_home_use_options'], function(_, option) {
    $select.append($('<option>', { value: option.text, text: option.text }));
  });

  var $select = $('#cover_refused_reason_list');
  $.each(groupedOptions['cover_refused_reason_options'], function(_, option) {
    $select.append($('<option>', { value: option.text, text: option.text }));
  });

  var $select = $('#terms_applied_reason_list');
  $.each(groupedOptions['terms_applied_reason_options'], function(_, option) {
    $select.append($('<option>', { value: option.text, text: option.text }));
  });

  var $select = $('#contents_level_of_cover_list');
  $.each(groupedOptions['contents_level_of_cover_options'], function(_, option) {
    $select.append($('<option>', { value: option.text, text: option.text }));
  });

  var $select = $('#contents_vol_excess_list');
  $.each(groupedOptions['contents_vol_excess_options'], function(_, option) {
    $select.append($('<option>', { value: option.text, text: option.text }));
  });

  var $select = $('#prev_ins_premium_paid_list');
  $.each(groupedOptions['prev_ins_premium_paid_options'], function(_, option) {
    $select.append($('<option>', { value: option.text, text: option.text }));
  });

  var $select = $('#lock_type_list');
  $.each(groupedOptions['lock_type_options'], function(_, option) {
    $select.append($('<option>', { value: option.text, text: option.text }));
  });

  var $select = $('#mains_or_battery_list');
  $.each(groupedOptions['mains_or_battery_options'], function(_, option) {
    $select.append($('<option>', { value: option.text, text: option.text }));
  });

  var $select = $('#safe_type_list');
  $.each(groupedOptions['safe_type_options'], function(_, option) {
    $select.append($('<option>', { value: option.text, text: option.text }));
  });

  var $select = $('#conv_types_list');
  $.each(groupedOptions['conv_types_options'], function(_, option) {
    $select.append($('<option>', { value: option.text, text: option.text }));
  });

  var $select = $('#conv_sentence_list');
  $.each(groupedOptions['conv_sentence_options'], function(_, option) {
    $select.append($('<option>', { value: option.text, text: option.text }));
  });

  var $select = $('#peril_type_list');
  $.each(groupedOptions['peril_type_options'], function(_, option) {
    $select.append($('<option>', { value: option.text, text: option.text }));
  });

  var $select = $('#tree_status_list');
  $.each(groupedOptions['tree_status_options'], function(_, option) {
    $select.append($('<option>', { value: option.text, text: option.text }));
  });

  var $select = $('#tree_type_list');
  $.each(groupedOptions['tree_type_options'], function(_, option) {
    $select.append($('<option>', { value: option.text, text: option.text }));
  });

  var $select = $('#tree_land_list');
  $.each(groupedOptions['tree_land_loptions'], function(_, option) {
    $select.append($('<option>', { value: option.text, text: option.text }));
  });

  var $select = $('#wall_construction_list');
  $.each(groupedOptions['wall_construction_options'], function(_, option) {
    $select.append($('<option>', { value: option.text, text: option.text }));
  });

  var $select = $('#roof_construction_list');
  $.each(groupedOptions['roof_construction_options'], function(_, option) {
    $select.append($('<option>', { value: option.text, text: option.text }));
  });

  var $select = $('#spec_item_type_list');
  $.each(groupedOptions['spec_item_type_options'], function(_, option) {
    $select.append($('<option>', { value: option.text, text: option.text }));
  });



  
  
  

  // Options reuse for other lists....
  var $select = $('#title_options_response_b');
  $.each(groupedOptions['title_options'], function(_, option) {
    $select.append($('<option>', { value: option.value, text: option.text }));
  });

  var $select = $('#co_occupant_title_list');
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

  var $select = $('#window_lock_type_list');
  $.each(groupedOptions['lock_type_options'], function(_, option) {
    $select.append($('<option>', { value: option.text, text: option.text }));
  });

   var $select = $('#buildings_level_of_cover_list');
  $.each(groupedOptions['contents_level_of_cover_options'], function(_, option) {
    $select.append($('<option>', { value: option.text, text: option.text }));
  });

  var $select = $('#buildings_vol_excess_list');
  $.each(groupedOptions['contents_vol_excess_options'], function(_, option) {
    $select.append($('<option>', { value: option.text, text: option.text }));
  });

  var $select = $('#buildings_prev_ins_premium_paid_list');
  $.each(groupedOptions['prev_ins_premium_paid_options'], function(_, option) {
    $select.append($('<option>', { value: option.text, text: option.text }));
  });

  var $select = $('#spec_item_vol_excess_list');
  $.each(groupedOptions['contents_vol_excess_options'], function(_, option) {
    $select.append($('<option>', { value: option.text, text: option.text }));
  });

  var $select = $('#spec_item_kept_list');
  $.each(groupedOptions['items_kept_options'], function(_, option) {
    $select.append($('<option>', { value: option.value, text: option.text }));
  });

  
});





