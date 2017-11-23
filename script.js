$(function(){
  console.log("jquery loaded");
  let groups = [
    {
      name: "VanHikers",
      short: "VH",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      location: "Vancouver",
      members: 79,
      created: "Jan 2016",
      cost: 25,
      next_event: "",
      tags: ["Fitness", "Bicycling"],
      organizers: "",
      status: ""
    },
    {
      name: "Food Lovers & Bloggers",
      short: "FL",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      location: "Burnaby",
      members: 22,
      created: "Jan 2016",
      cost: 0,
      next_event: "",
      tags: ["Social", "Adventure", "Hiking"],
      organizers: "",
      status: ""
    },
    {
      name: "Pick-Up Sports",
      short: "PS",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      location: "Vancouver",
      members: 120,
      created: "Nov 2017",
      cost: 0,
      next_event: "",
      tags: ["Fitness", "Hiking"],
      organizers: "",
      status: ""
    },
    {
      name: "VanJS",
      short: "VJ",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      location: "Victoria",
      members: 20,
      created: "August 2017",
      cost: 40,
      next_event: "",
      tags: ["Social", "Adventure"],
      organizers: "",
      status: ""
    },
    {
      name: "Urban Minglers 30+",
      short: "UM",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      location: "Vancouver",
      members: 32,
      created: "May 2017",
      cost: 0,
      next_event: "",
      tags: ["Fitness", "Social"],
      organizers: "",
      status: ""
    },
    {
      name: "Tech Vancouver",
      short: "TV",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      location: "Vancouver",
      members: 58,
      created: "April 2016",
      cost: 10,
      next_event: "",
      tags: ["Adventure"],
      organizers: "",
      status: ""
    },
    {
      name: "Code and Coffee",
      short: "CC",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      location: "Richmond",
      members: 42,
      created: "Jan 2016",
      cost: 0,
      next_event: "",
      tags: ["Fitness", "Bicycling", "Social", "Adventure", "Hiking"],
      organizers: "",
      status: ""
    },
    {
      name: "Vancouver Brainiacs",
      short: "VB",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      location: "Vancouver",
      members: 16,
      created: "Feb 2017",
      cost: 30,
      next_event: "",
      tags: ["Fitness", "Bicycling", "Social", "Adventure", "Hiking"],
      organizers: "",
      status: ""
    },
    {
      name: "Single Professionals",
      short: "SP",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      location: "Vancouver",
      members: 210,
      created: "Dec 2015",
      cost: 25,
      next_event: "",
      tags: ["Fitness", "Hiking"],
      organizers: "",
      status: ""
    },
    {
      name: "English Conversation Club",
      short: "EC",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      location: "Richmond",
      members: 102,
      created: "Nov 2017",
      cost: 0,
      next_event: "",
      tags: ["Fitness", "Hiking"],
      organizers: "",
      status: ""
    },
    {
      name: "Cooking Mamas",
      short: "CM",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      location: "Richmond",
      members: 120,
      created: "Nov 2017",
      cost: 0,
      next_event: "",
      tags: ["Fitness", "Hiking"],
      organizers: "",
      status: ""
    },
    {
      name: "Outdoor Adventure",
      short: "OA",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      location: "Vancouver",
      members: 40,
      created: "Nov 2014",
      cost: 0,
      next_event: "",
      tags: ["Adventure", "Outdoors", "Hiking"],
      organizers: "",
      status: ""
    },
    {
      name: "Rowing Club",
      short: "RC",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      location: "Vancouver",
      members: 90,
      created: "Oct 2016",
      cost: 20,
      next_event: "",
      tags: ["Fitness", "Rowing", "Sports"],
      organizers: "",
      status: ""
    },
    {
      name: "Vancouver Startups",
      short: "VN",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      location: "Vancouver",
      members: 210,
      created: "Jan 2017",
      cost: 5,
      next_event: "",
      tags: ["Business", "Startups", "Tech"],
      organizers: "",
      status: ""
    },
    {
      name: "Movie and Music Fans",
      short: "MM",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      location: "Vancouver",
      members: 120,
      created: "Mar 2013",
      cost: 20,
      next_event: "",
      tags: ["Movies", "Music", "Entertainment"],
      organizers: "",
      status: ""
    },
    {
      name: "Sketch Club",
      short: "SC",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      location: "Vancouver",
      members: 40,
      created: "Jul 2015",
      cost: 0,
      next_event: "",
      tags: ["Art", "Drawing"],
      organizers: "",
      status: ""
    },
    {
      name: "Salsa Dance Meetup",
      short: "SD",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      location: "Vancouver",
      members: 80,
      created: "Apr 2014",
      cost: 15,
      next_event: "",
      tags: ["Dance", "Music"],
      organizers: "",
      status: ""
    },
    {
      name: "VanFoodies",
      short: "VF",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      location: "Vancouver",
      members: 100,
      created: "Mar 2015",
      cost: 30,
      next_event: "",
      tags: ["Restaurants", "Food"],
      organizers: "",
      status: ""
    }
  ]

  var format_group = function(group) {
    html = "<h2>"+group['name']+"</h2>"
    if (attributes.indexOf("description") > -1){
      html += "<p>"+group['description']+"</p>"
    }

    if (attributes.indexOf("location") > -1){
      html += "<p>"+group['location']+"</p>"
    }

    if (attributes.indexOf("members") > -1){
      html += "<p>Members: "+group['members']+"</p>"
    }

    if (attributes.indexOf("cost") > -1){
      html += "<p>Cost: $"+group['cost']+"</p>"
    }

    if (attributes.indexOf("next_event") > -1){
      html += "<p>Next Event: "+group['next_event']+"</p>"
    }

    if (attributes.indexOf("created") > -1){
      html += "<p>Created: "+group['created']+"</p>"
    }

    if (attributes.indexOf("tags") > -1){
      html += "<p>Tags: "+group['tags']+"</p>"
    }

    if (attributes.indexOf("organizers") > -1){
      html += "<p>Organizers: "+group['organizers']+"</p>"
    }
    return html
  }

  var hide_all = function() {
    $('#filters').css("display", "none")
    $('#browse-groups').css("display", "none")
    $('#bookmarked-groups').css("display", "none")
    $('#faceoff-groups').css("display", "none")
    $('#show-group').css("display", "none")
    $('#profile-section').css("display", "none")

  }

  // Get all groups that have not in cart or deleted
  var get_groups = function() {
    valid_groups = []

    for (let i=0; i<groups.length; i++){
      if (groups[i]['status'] != 'favourite' && groups[i]['status'] != 'delete'){
        if (match_filter(groups[i])){
          valid_groups.push(groups[i])
        }
      }
    }
  }

  // Populate browse page with groups
  var set_groups = function() {
    if (valid_groups[0] != undefined){
      document.getElementById("pos_1").innerHTML = format_group(valid_groups[0])
    } else {
      document.getElementById("pos_1").innerHTML = ''
    }
    if (valid_groups[1] != undefined){
      document.getElementById("pos_2").innerHTML = format_group(valid_groups[1])
    } else {
      document.getElementById("pos_2").innerHTML = ''
    }
    if (valid_groups[2] != undefined){
      document.getElementById("pos_3").innerHTML = format_group(valid_groups[2])
    } else {
      document.getElementById("pos_3").innerHTML = ''
    }
    if (valid_groups[3] != undefined){
      document.getElementById("pos_4").innerHTML = format_group(valid_groups[3])
    } else {
      document.getElementById("pos_4").innerHTML = ''
    }
    pos_1 = 0
    pos_2 = 1
    pos_3 = 2
    pos_4 = 3
    next  = 4
  }

  // Store all groups in cart in favourites variable
  var set_favourites = function() {
    favourites = []
    for (let group of groups){
      if (group['status'] == 'favourite'){
        favourites.push(group)
      }
    }

    html = "<h2>Cart</h2>"
    for (let i=0; i<favourites.length; i++){
      html+="<div class='col-md-4'> <div id='fav_" + i + "' class='group fav-group'>"+format_group(favourites[i]) + "</div></div>"
      document.getElementById("bookmarked-groups").innerHTML = html
    }
  }

  // Populate face off page - takes first 3 groups in cart
  var set_faceoff = function() {
    console.log("FACEOFF")
    hide_all()
    $('#faceoff-groups').css("display", "")
    document.getElementById("fev").innerHTML = format_group(favourites[0])
    document.getElementById("fev2").innerHTML = format_group(favourites[1])
    document.getElementById("fev3").innerHTML = format_group(favourites[2])
  }

  // Replace single group in browse page
  var set_group = function(id) {
    if (valid_groups[next] != undefined){
      document.getElementById("pos_"+id).innerHTML = format_group(valid_groups[next])
    } else {
      document.getElementById("pos_"+id).innerHTML = ''
    }
    next++
  }

  // Show a single group
  var show_group = function(id) {
    hide_all()
    $('#show-group').css("display", "")
    html = "<h2>"+favourites[id]['name']+"</h2>"
    html+="<div class='group fav-group'>"+format_group(favourites[id]) + "</div>"
    document.getElementById("show-group").innerHTML = html
  }

  $('#face-0').click(function(id){
    console.log("SHOW GROUP")
    // show_group(id)
  });
    $('#face-1').click(function(id){
    console.log("SHOW GROUP")
    // show_group(id)
  });
      $('#face-2').click(function(id){
    console.log("SHOW GROUP")
    // show_group(id)
  });

  // Add mini card to cart
  var add_cart = function(i) {
    cart_html += "<li>"+valid_groups[i]['short']+"</li>"
    document.getElementById("cart-items").innerHTML = cart_html
  }

  // Update attributes to display
  var update_attributes = function(){
    attributes = []
    if ($('#description').is(":checked")){
      attributes.push("description")
    }
    if ($('#location').is(":checked")){
      attributes.push("location")
    }
    if ($('#members').is(":checked")){
      attributes.push("members")
    }
    if ($('#created').is(":checked")){
      attributes.push("created")
    }
    if ($('#cost').is(":checked")){
      attributes.push("cost")
    }
    if ($('#next_event').is(":checked")){
      attributes.push("next_event")
    }
    if ($('#tags').is(":checked")){
      attributes.push("tags")
    }
    if ($('#organizers').is(":checked")){
      attributes.push("organizers")
    }
    set_groups()
  }

  // Filter groups
  var match_filter = function(group){
    filter = {
      location: $('#location-filter').val(),
      members: $('#members-filter').val(),
      cheap: $('#cheap-filter').is(":checked"),
      moderate: $('#moderate-filter').is(":checked"),
      expensive: $('#expensive-filter').is(":checked"),
      filters: []
    }
    if (group['location'] != filter['location'] && filter['location'] != '') {
      return false
    }

    if (group['members'] < filter['members'] && filter['members'] != '') {
      return false
    }

    if (!(group['cost'] == 0) && filter['cheap'] == true) {
      return false
    }

    if (!(group['cost'] > 0 & group['cost'] <= 20) && filter['moderate'] == true) {
      return false
    }

    if (!(group['cost'] > 20) && filter['expensive'] == true) {
      return false
    }

    // if (group['filters'] != filter['filters']) {
    //   return false
    // }

    return true
  }

  var initialize = function() {
    cart_html = ""
    pos_1 = 0
    pos_2 = 1
    pos_3 = 2
    pos_4 = 3
    next = 4
    valid_groups = groups
    filter = {}
    favourites = []

    update_attributes()
    set_groups()
    hide_all()
    $('#browse-groups').css("display", "")
    $('#filters').css("display", "")
  }

  initialize()

  $('#attribute-submit').click(function(e){
    update_attributes()
  });

  $('#filter-submit').click(function(e){
    get_groups()
    set_groups()
  });

  $('#faceoff-submit').click(function(e){
    set_favourites()
    if (favourites.length >=3){
      $('#faceoff-groups').css("display", "")
      $('#bookmarked-groups').css("display", "none")
      set_faceoff()
    } else {
      alert('add at least 3 groups to cart!')
    }
  });

  $('#add-groups').click(function(){
    hide_all()
    $('#browse-groups').css("display", "")
    $('#filters').css("display", "")
  });

  $('#logo').click(function(){
    hide_all()
    $('#browse-groups').css("display", "")
    $('#filters').css("display", "")
  });

  $('#cart').click(function(){
    set_favourites()
    hide_all()
    $('#bookmarked-groups').css("display", "")
  });

  $('#profile').click(function(){
    console.log("Show profile")
    hide_all()
    $('#profile-section').css("display", "")
  });

  $('#love_1').click(function(){
    for (var i=0; i<groups.length; i++) {
      if (valid_groups[pos_1] == groups[i]){
        groups[i]['status'] = 'favourite'
      }
    }
    add_cart(pos_1)
    pos_1 = next
    set_group(1)
  });

  $('#love_2').click(function(){
    for (var i=0; i<groups.length; i++) {
      if (valid_groups[pos_2] == groups[i]){
        groups[i]['status'] = 'favourite'
      }
    }
    add_cart(pos_2)
    pos_2 = next
    set_group(2)
  });

  $('#love_3').click(function(){
    for (var i=0; i<groups.length; i++) {
      if (valid_groups[pos_3] == groups[i]){
        groups[i]['status'] = 'favourite'
      }
    }
    add_cart(pos_3)
    pos_3 = next
    set_group(3)
  });

  $('#love_4').click(function(){
    for (var i=0; i<groups.length; i++) {
      if (valid_groups[pos_4] == groups[i]){
        groups[i]['status'] = 'favourite'
      }
    }
    add_cart(pos_4)
    pos_4 = next
    set_group(4)
  });

  $('#delete_1').click(function(){
    for (var i=0; i<groups.length; i++) {
      if (valid_groups[pos_1] == groups[i]){
        groups[i]['status'] = 'delete'
      }
    }
    set_group(1)
    pos_1 = next
  });

  $('#delete_2').click(function(){
    for (var i=0; i<groups.length; i++) {
      if (valid_groups[pos_1] == groups[i]){
        groups[i]['status'] = 'delete'
      }
    }
    set_group(2)
    pos_2 = next
  });

  $('#delete_3').click(function(){
    for (var i=0; i<groups.length; i++) {
      if (valid_groups[pos_1] == groups[i]){
        groups[i]['status'] = 'delete'
      }
    }
    set_group(3)
    pos_3 = next
  });

  $('#delete_4').click(function(){
    for (var i=0; i<groups.length; i++) {
      if (valid_groups[pos_1] == groups[i]){
        groups[i]['status'] = 'delete'
      }
    }
    set_group(4)
    pos_4 = next
  });

  $('#choose_1').click(function(){
    console.log("CHOOSE 1")
    show_group(0)
  });

  $('#choose_2').click(function(){
    console.log("CHOOSE 2")

    show_group(1)
  });

  $('#choose_3').click(function(){
    console.log("CHOOSE 3")

    show_group(2)
  });

});