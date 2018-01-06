$(document).ready(function () {
    $('#searchUser').on('keyup', function (e) {
        let username = e.target.value;
        
        //make request to Github 
        $.ajax({
            url: 'https://api.github.com/users/' + username,
            data: {
                client_id: '6f70345ffa2ae7e85d72',
                client_secret:'400a89f14449f330f7e5be3093c030ad312eb737'
            }
        }).done(function (user) {
            $.ajax({
                url: 'https://api.github.com/users/' + username + '/repos',
                data: {
                    client_id: '6f70345ffa2ae7e85d72',
                    client_secret: '400a89f14449f330f7e5be3093c030ad312eb737',
                    sort: 'created:asc',
                    per_page:5
                }
    
            }).done(function (repos) {
                $.each(repos, function(index,repo){
                    $('#repos').append(`
                         <strong>${repo.name}</strong>:${repo.description}
                         <div class="row">
           <div class="col-md-3">
            <span class="badge badge-primary">Forks:${repo.forks_count}</span>
            <span class="badge badge-secondary">Watchers:${repo.watchers_count}</span>
            <span class="badge badge-success">Stars:${repo.startgazers_count}</span>
           
           </div>
           <div class="col-md-2">
           <a href="{repo.html_url}" target="_blank" class="btn btn-default">Repo page</a>
           </div>

                    
                   
              
                    
                    `)
                });
                
            });
            $('#profile').html(`
            ${user.name }
            <div class="row">
            <div class="col-md-3">
            <img class="thumbnail avatar" src="${user.avatar_url}">
            <a target="_blank" class="btn btn-primary btn-block" href="${user.html_url}">View profile</a>
            </div>
            <div class="col-md-9">
            <span class="badge badge-primary">Public repos:${user.public_repos}</span>
            <span class="badge badge-secondary">Public gists:${user.public_gists}</span>
            <span class="badge badge-success">Followers:${user.followers}</span>
            <span class="badge badge-danger">Following:${user.following}</span>
            <br><br>
            <h3 class="page-header">Latest Repos</h3>
            <div id="repos"></div>
  
            
            
            </div>
            
            </div>
            `)
            
        });
    });
});