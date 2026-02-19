# Troubleshooting Networks

## Topics to Cover

- dig
- host
- hostname
- ifconfig
- ip
- ping
- netstat
- nmap
- nc
- tcpdump
- telnet
- traceroute
- wireshark

## hostname

Hostname is useful for naming machines and checking your the IP address for the machine you are shelled into.

```shell
hostname -I

192.168.0.61
```

## nmap

> Nmap (“Network Mapper”) is an open source tool for network exploration and security auditing.

### Network Discovery and Port Scanning

nmap can be used to check which ports are open on device's. This is useful when, for example, I know my Proxmox server should be exposing a UI service over a known port but I can't remember on which IP.

I can run a scan for host discovery using a basic list scan

```shell
nmap -sL 192.168.0.0/24


Nmap scan report for 192.168.0.49
Nmap scan report for 192.168.0.50
Nmap scan report for Mac.MG8702 (192.168.0.51)
Nmap scan report for 192.168.0.52
Nmap scan report for 192.168.0.53
Nmap scan report for 192.168.0.54
Nmap scan report for 192.168.0.55
Nmap scan report for 192.168.0.56
Nmap scan report for 192.168.0.57
Nmap scan report for 192.168.0.58
Nmap scan report for 192.168.0.59
Nmap scan report for 192.168.0.60
Nmap scan report for proxmox.MG8702 (192.168.0.61) # found it :)
Nmap scan report for 192.168.0.62
Nmap scan report for 192.168.0.63
Nmap scan report for 192.168.0.64
```

### References

- https://nmap.org/book/man.html#man-description
- https://nmap.org/book/man-host-discovery.html

## nslookup

nslookup is a useful tool for dns testing. 

For example, I wanted to check that my computer was using `/etc/hosts` to lookup the entry I made for my proxmox server.

```shell
nslookup proxmox

Server:         192.168.0.1
Address:        192.168.0.1#53

Name:   proxmox
Address: 192.168.0.61
```

Additionally, I can check where my site is hosted:


```shell
nslookup james.codes                                                                                                                                       

Server:         192.168.0.1                                                                                                                                   
Address:        192.168.0.1#53                                                                                                                                
                                                                                                                                                              
Non-authoritative answer:                                                                                                                                     
Name:   james.codes                                                                                                                                           
Address: 185.199.109.153                                                                                                                                      
Name:   james.codes                                                                                                                                           
Address: 185.199.110.153                                                                                                                                      
Name:   james.codes                                                                                                                                           
Address: 185.199.111.153                                                                                                                                      
Name:   james.codes                                                                                                                                           
Address: 185.199.108.153
```

## whois

whois is a utility for looking up domain names and IP addresses against registries.

For example here is an IP my domain `james.codes` is tied to. The output makes since seeing as this domain is tied to a GitHub page.

```shell
whois 185.199.109.153                                                                                                                                      
% IANA WHOIS server                                                                                                                                           
% for more information on IANA, visit http://www.iana.org                                                                                                     
% This query returned 1 object                                                                                                                                
                                                                                                                                                              
refer:        whois.ripe.net                                                                                                                                  
                                                                                                                                                              
inetnum:      185.0.0.0 - 185.255.255.255                                                                                                                     
organisation: RIPE NCC                                                                                                                                        
status:       ALLOCATED                                                                                                                                       
                                                                                                                                                              
whois:        whois.ripe.net                                                                                                                                  
                                                                                                                                                              
changed:      2011-02                                                                                                                                         
source:       IANA                                                                                                                                            
                                                                                                                                                              
# whois.ripe.net                                                                                                                                              
                                                                                                                                                              
inetnum:        185.199.108.0 - 185.199.111.255                                                                                                               
netname:        US-GITHUB-20170413                                                                                                                            
country:        US                                                                                                                                            
org:            ORG-GI58-RIPE                                                                                                                                 
admin-c:        GA9828-RIPE                                                                                                                                   
tech-c:         NO1444-RIPE                                                                                                                                   
status:         ALLOCATED-ASSIGNED PA                                                                                                                         
mnt-by:         RIPE-NCC-HM-MNT                                                                                                                               
mnt-by:         us-github-1-mnt                                                                                                                               
created:        2017-04-13T15:36:35Z                                                                                                                          
last-modified:  2025-01-21T15:14:18Z                                                                                                                          
source:         RIPE
```

