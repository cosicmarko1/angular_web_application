import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit, OnDestroy {

    private userSub: Subscription;
    isAuthenticated = false;

    constructor(private router: Router, private route: ActivatedRoute, private dataStorageService: DataStorageService, private authService: AuthService) { }

    ngOnInit(): void {
        this.userSub = this.authService.user.subscribe(user => {
            this.isAuthenticated = !!user;
            console.log(!user);
            console.log(!!user);
        });
    }

    onLogin() {
        this.router.navigate(['userlogin'], { relativeTo: this.route });
    }

    onLogout() {
        this.authService.logout();
    }

    onSaveNews() {
        this.dataStorageService.storeNews();
    }

    onFetchNews() {
        this.dataStorageService.fetchNews().subscribe();
    }

    ngOnDestroy(): void {
        this.userSub.unsubscribe();
    }

}