$('#menubar').click(()=>
      {
        $('#menubar').hide()
        $('#closebutton').show()
        $('#mobnav').show()
      })
      $('#closebutton').click(()=>
      {
        $('#menubar').show()
        $('#closebutton').hide()
        $('#mobnav').hide()
      })


      function changesign(num)
      {
        if(document.getElementById(`sign${num}`).innerHTML=='+')
        {
            document.getElementById(`sign${num}`).innerHTML='-'
        }
        else
        {
            document.getElementById(`sign${num}`).innerHTML='+'
        }
      }