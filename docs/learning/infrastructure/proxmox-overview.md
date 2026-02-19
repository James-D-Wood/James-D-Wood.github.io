# Proxmox

Proxmox is a platform to run kernal-based virtual machines (KVMs) and container-based virtualization (LXC). It is a beginner friendly hypervisor technology that I am using to set up my homelab environment.

## Resources

- [Proxmox VE Admin Guide](https://pve.proxmox.com/pve-docs/pve-admin-guide.html)
- [Linux Container (LXC) Project Site](https://linuxcontainers.org/)
- [Cloud Init Documentation](https://cloudinit.readthedocs.io/en/latest/)

## Architecture

![Proxmox VE Architecture and Tools](./assets/proxmox-architecture.svg)

## Kernal-Based Virtual Machines (KVM)

Proxmox is installed as the OS to a host machine and is a flavor of Debian Linux. It uses QEMU (Quick EMUlator) as to serve KVMs. This is the biggest area of interest for me because it provides an experience similar to Amazon EC@ or Digital Ocean droplets at home. I can also use a number of KVMs to build out a k8s cluster to for deploying container based applications.

QEMU provides the software equivalent of hardware drivers to allow guest OS's to run as is on the host machine. A more efficient method is paravirtualization, which clues the guest OS in that it is running in a virtualized environment and allows it to opt in to using paravirtualized drivers which reduce the overhead to run the VM for the host machine.

### VM Settings

#### OS Settings

- Select ISO image desired for the host machine
- Select the appropriate OS (Linux for the majority of my use cases as I plan to run unix based servers)

#### System Settings

- Check whether guest OS supports QEMU guest agent and select this option if available
- Otherwise use defaults unless PCIe passthrough is required

#### Machine Settings

- Use defaults unless PCIe passthrough is required

#### Hard Disk

- Bus/Controller - the documentation highly recommendeds "to use the VirtIO SCSI or VirtIO Block controller for performance reasons and because they are better maintained"

#### Image Format

- Unless there is a high performance use case, use the QEMU format as it enables all snapshot capabilities

#### CPU Cores

- Recommended default is 2
- Increase if the workload can leverage parallelization
- Total cores across VMs can be greater than the host machine's number of cores
- No single VM should have more cores than the host machine as the context switching overhead is inefficient

#### CPU Type

- kvm64 is the safe default that should work across all host chips
- if live migration is not a concern or the cluster is homogenous in the chip types - selecting the matching chip can make machines more efficient

#### Network Device

- virtio (paravirtualized option) is recommended as most performant

### Cloning Options

Full Clone - This is a fully independent clone of a source VM. It copies all of the data for the new install and is generally slower.

Linked Clone - Points to the original storage of the source VM on read and copies the data to new storage on write operations. This is faster.

### VM Templates

These are read only images that can be used as the basis for linked clones.

### Cloud Init

Cross platform standard that enables initialization of VMs (network, packages, storage, SSH) from the hypervisor side. Proxmox offers a [guide](https://pve.proxmox.com/pve-docs/pve-admin-guide.html#qm_cloud_init) for creating templates using existing cloud init files.
