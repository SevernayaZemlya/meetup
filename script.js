$(function(){
  console.log("jquery loaded");
  let groups = [
    {
      name: "1",
      short: "1",
      location: "Vancouver, BC",
      members: 50,
      founded: "Jan 2016",
      cost: "$0",
      next_event: "",
      tags: ["Fitness", "Bicycling"],
      organizers: "",
      status: ""
    },
    {
      name: "2",
      short: "2",
      location: "Vancouver, BC",
      members: 50,
      founded: "Jan 2016",
      cost: "$10",
      next_event: "",
      tags: ["Social", "Adventure", "Hiking"],
      organizers: "",
      status: ""
    },
    {
      name: "3",
      short: "3",
      location: "Vancouver, BC",
      members: 50,
      founded: "Jan 2016",
      cost: "$10",
      next_event: "",
      tags: ["Social", "Adventure"],
      organizers: "",
      status: ""
    },
    {
      name: "4",
      short: "4",
      location: "Vancouver, BC",
      members: 50,
      founded: "Jan 2016",
      cost: "$10",
      next_event: "",
      tags: ["Fitness", "Social"],
      organizers: "",
      status: ""
    },
    {
      name: "5",
      short: "5",
      location: "Vancouver, BC",
      members: 50,
      founded: "Jan 2016",
      cost: "$10",
      next_event: "",
      tags: ["Adventure"],
      organizers: "",
      status: ""
    },
    {
      name: "6",
      short: "6",
      location: "Vancouver, BC",
      members: 50,
      founded: "Jan 2016",
      cost: "$10",
      next_event: "",
      tags: ["Fitness", "Bicycling", "Social", "Adventure", "Hiking"],
      organizers: "",
      status: ""
    },
    {
      name: "7",
      short: "7",
      location: "Vancouver, BC",
      members: 50,
      founded: "Jan 2016",
      cost: "$10",
      next_event: "",
      tags: ["Fitness", "Bicycling", "Social", "Adventure", "Hiking"],
      organizers: "",
      status: ""
    },
    {
      name: "8",
      short: "8",
      location: "Vancouver, BC",
      members: 50,
      founded: "Jan 2016",
      cost: "$10",
      next_event: "",
      tags: ["Fitness", "Hiking"],
      organizers: "",
      status: ""
    },
    {
      name: "9",
      short: "9",
      location: "Vancouver, BC",
      members: 50,
      founded: "Jan 2016",
      cost: "$10",
      next_event: "",
      tags: ["Fitness", "Hiking"],
      organizers: "",
      status: ""
    },
  ]

  var format_group = function(group) {
    html = "<h2>"+group['name']+"</h2>"
    if (filters.indexOf("location") > -1){
      html += "<p>"+group['location']+"</p>"
    }

    if (filters.indexOf("members") > -1){
      html += "<p>Members: "+group['members']+"</p>"
    }

    if (filters.indexOf("cost") > -1){
      html += "<p>Cost: "+group['cost']+"</p>"
    }

    if (filters.indexOf("next_event") > -1){
      html += "<p>Next Event: "+group['next_event']+"</p>"
    }

    if (filters.indexOf("founded") > -1){
      html += "<p>Next Event: "+group['next_event']+"</p>"
    }

    if (filters.indexOf("tags") > -1){
      html += "<p>Tags: "+group['tags']+"</p>"
    }

    if (filters.indexOf("organizers") > -1){
      html += "<p>Organizers: "+group['organizers']+"</p>"
    }
    return html
  }

  var set_group = function(id) {
    while (groups[next]['status'] == 'favourite' ||
      groups[next]['status'] == 'delete' ){
      next++
    }
    document.getElementById("group_"+id).innerHTML = format_group(groups[next])
    next++
  }

  var add_cart = function(i) {
    cart_html += "<li>"+groups[i]['short']+"</li>"
    document.getElementById("cart-container").innerHTML =
    "<ul>"+cart_html+"</ul>"
  }

  var refresh_groups = function() {
    document.getElementById("group_1").innerHTML = format_group(groups[group_1])
    document.getElementById("group_2").innerHTML = format_group(groups[group_2])
    document.getElementById("group_3").innerHTML = format_group(groups[group_3])
    document.getElementById("group_4").innerHTML = format_group(groups[group_4])
  }

  $('#filter-submit').click(function(e){
    update_filters()
  });

  var update_filters = function(){
    filters = []
    if ($('#location').is(":checked")){
      filters.push("location")
    }
    if ($('#members').is(":checked")){
      filters.push("members")
    }
    if ($('#founded').is(":checked")){
      filters.push("founded")
    }
    if ($('#cost').is(":checked")){
      filters.push("cost")
    }
    if ($('#next_event').is(":checked")){
      filters.push("next_event")
    }
    if ($('#tags').is(":checked")){
      filters.push("tags")
    }
    if ($('#organizers').is(":checked")){
      filters.push("organizers")
    }
    refresh_groups()
  }

  var initialize = function() {
    cart_html = ""
    group_1 = 0
    group_2 = 1
    group_3 = 2
    group_4 = 3
    next = 4

    update_filters()
  }

  initialize()

  $('#love_1').click(function(){
    groups[group_1]['status'] = 'favourite'
    add_cart(group_1)
    group_1 = next
    set_group(1)
  });

  $('#love_2').click(function(){
    groups[group_2]['status'] = 'favourite'
    add_cart(group_2)
    group_2 = next
    set_group(2)
  });

  $('#love_3').click(function(){
    groups[group_3]['status'] = 'favourite'
    add_cart(group_3)
    group_3 = next
    set_group(3)
  });

  $('#love_4').click(function(){
    groups[group_4]['status'] = 'delete'
    group_4 = next
    set_group(4)
  });

  $('#delete_1').click(function(){
    groups[group_1]['status'] = 'delete'
    group_1 = next
    set_group(1)
  });

  $('#delete_2').click(function(){
    groups[group_2]['status'] = 'delete'
    group_2 = next
    set_group(2)
  });

  $('#delete_3').click(function(){
    groups[group_3]['status'] = 'delete'
    group_3 = next
    set_group(3)
  });

  $('#delete_4').click(function(){
    groups[group_4]['status'] = 'delete'
    group_4 = next
    set_group(4)
  });

});