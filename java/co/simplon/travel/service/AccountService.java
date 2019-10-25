package co.simplon.travel.service;

import co.simplon.travel.entities.AppRole;
import co.simplon.travel.entities.AppUser;

public interface AccountService {
    public AppUser saveUser(String username,String password,String confirmedPassword);
    public AppRole save(AppRole role);
    public AppUser loadUserByUsername(String username);
    public void addRoleToUser(String username,String rolename);
}